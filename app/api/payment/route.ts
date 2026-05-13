import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { orderId, token, amount } = body;

  // ✅ Validate input
  if (!orderId || !token || !amount) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // ✅ Call Square API
  const squareRes = await fetch("https://connect.squareup.com/v2/payments", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.SQUARE_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idempotency_key: crypto.randomUUID(),
      source_id: token,
      amount_money: {
        amount: amount,
        currency: "USD",
      },
    }),
  });

  const data = await squareRes.json();

  // ❌ Handle payment error
  if (!squareRes.ok) {
    return NextResponse.json({ error: data }, { status: 400 });
  }

  // ✅ Save in Supabase
  await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/payments`, {
    method: "POST",
    headers: {
      "apikey": process.env.SUPABASE_SERVICE_ROLE_KEY!,
      "Authorization": `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      order_id: orderId,
      square_payment_id: data.payment.id,
      amount: amount,
      status: "paid",
    }),
  });

  return NextResponse.json({ success: true, payment: data.payment });
}