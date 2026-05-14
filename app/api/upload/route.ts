export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import sgMail from '@sendgrid/mail';

// ✅ SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  try {
    // ✅ Get Form Data
    const formData = await req.formData();

    const full_name = formData.get('full_name') as string;
    const email = formData.get('email') as string;
    const academic_level = formData.get('academic_level') as string;
    const subject = formData.get('subject') as string;
    const assignment_type = formData.get('assignment_type') as string;
    const word_count = formData.get('word_count') as string;
    const deadline = formData.get('deadline') as string;
    const instructions = formData.get('instructions') as string;

    // ✅ File
    const file = formData.get('file') as File | null;

    // =====================================================
    // 1. SAVE ORDER
    // =====================================================

    const { data: orderData, error: orderError } =
      await supabaseAdmin
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
            instructions,
            status: 'pending',
          },
        ])
        .select()
        .single();

    // ❌ Order Save Error
    if (orderError) {
      console.error('❌ Order Save Error:', orderError);

      return NextResponse.json(
        { error: orderError.message },
        { status: 500 }
      );
    }

    console.log('✅ Order Saved');

    // =====================================================
    // 2. FILE UPLOAD
    // =====================================================

    let uploadedFileUrl = '';
    let uploadedFileName = '';

    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // ✅ Unique File Name
      const uniqueFileName = `${Date.now()}-${file.name}`;

      // ✅ Upload To Bucket
      const { error: uploadError } =
        await supabaseAdmin.storage
          .from('order-files')
          .upload(uniqueFileName, buffer, {
            contentType: file.type,
            upsert: false,
          });

      // ❌ Upload Error
      if (uploadError) {
        console.error(
          '❌ Supabase Upload Error:',
          uploadError
        );

        return NextResponse.json(
          { error: uploadError.message },
          { status: 500 }
        );
      }

      console.log('✅ File Uploaded');

      // ✅ Public URL
      const {
        data: { publicUrl },
      } = supabaseAdmin.storage
        .from('order-files')
        .getPublicUrl(uniqueFileName);

      uploadedFileUrl = publicUrl;
      uploadedFileName = file.name;

      // =====================================================
      // 3. SAVE FILE DATA IN order_files TABLE
      // =====================================================

      const { error: fileDbError } =
        await supabaseAdmin
          .from('order_files')
          .insert([
            {
              order_id: orderData.id,
              file_url: uploadedFileUrl,
              file_name: uploadedFileName,
            },
          ]);

      // ❌ File Table Error
      if (fileDbError) {
        console.error(
          '❌ order_files Table Error:',
          fileDbError
        );

        return NextResponse.json(
          { error: fileDbError.message },
          { status: 500 }
        );
      }

      console.log('✅ File Saved In Database');
    }

    // =====================================================
    // 4. SEND EMAIL
    // =====================================================

    try {
      await sgMail.send({
        to: process.env.SENDGRID_TO_EMAIL!,
        from: {
          email: process.env.SENDGRID_FROM_EMAIL!,
          name: process.env.SENDGRID_FROM_NAME!,
        },

        replyTo: email,

        subject: `📥 New Order From ${full_name}`,

        html: `
<div style="font-family:Arial,sans-serif;padding:20px;">

<h2 style="color:#f97316;">
📚 New Order Received
</h2>

<p><strong>Name:</strong> ${full_name}</p>

<p><strong>Email:</strong> ${email}</p>

<p><strong>Academic Level:</strong> ${academic_level}</p>

<p><strong>Subject:</strong> ${subject}</p>

<p><strong>Assignment Type:</strong> ${assignment_type}</p>

<p><strong>Word Count:</strong> ${word_count}</p>

<p><strong>Deadline:</strong> ${deadline}</p>

<h3>📝 Instructions</h3>

<p>
${instructions || 'No instructions provided'}
</p>

${
  uploadedFileUrl
    ? `
<p>
<strong>Uploaded File:</strong>
<a href="${uploadedFileUrl}" target="_blank">
View File
</a>
</p>
`
    : ''
}

<hr style="margin:30px 0;" />

<p>
<strong>Order ID:</strong> ${orderData.id}
</p>

</div>
        `,
      });

      console.log('✅ Email Sent');

    } catch (emailError) {
      console.error(
        '❌ SendGrid Email Error:',
        emailError
      );
    }

    // =====================================================
    // SUCCESS RESPONSE
    // =====================================================

    return NextResponse.json({
      success: true,
      order: orderData,
    });

  } catch (error) {
    console.error('❌ Server Error:', error);

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}