// app/order/page.tsx
import type { Metadata } from "next";
import OrderNowPage from "@/components/pages/OrderNowPage";

export const metadata: Metadata = {
  title: "Order | Scholar Nest",
  description: "Start your order with Scholar Nest academic consulting.",
};

export default function OrderPage() {
  return <OrderNowPage />;
}
