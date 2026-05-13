import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      full_name,
      email,
      academic_level,
      subject,
      assignment_type,
      word_count,
      deadline,
      instructions,
    } = body;

    if (
      !full_name ||
      !email ||
      !academic_level ||
      !subject ||
      !assignment_type ||
      word_count === undefined ||
      word_count === null ||
      Number.isNaN(Number(word_count)) ||
      !deadline
    ) {
      return NextResponse.json(
        { error: 'Missing or invalid required fields' },
        { status: 400 }
      );
    }

    const { data: orderData, error: orderError } = await supabaseAdmin
      .from('orders')
      .insert([
        {
          full_name,
          email,
          academic_level,
          subject,
          assignment_type,
          word_count: Number(word_count),
          deadline,
          instructions: instructions ?? '',
          status: 'pending',
        },
      ])
      .select()
      .single();

    if (orderError) {
      console.error('Order save error:', orderError);
      return NextResponse.json(
        { error: orderError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      order: orderData,
    });
  } catch (error) {
    console.error('Orders API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
