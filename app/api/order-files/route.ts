export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { order_id, file_url, file_name } = body;

    const { data, error } = await supabaseAdmin
      .from('order_files')
      .insert([
        {
          order_id,
          file_url,
          file_name,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase order_files error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, file: data });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}