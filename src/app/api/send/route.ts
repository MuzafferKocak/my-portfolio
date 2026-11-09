
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    const { data: userMessageData, error: userMessageError } =
      await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        subject: subject,
        react: (
          <>
            <h1>{subject}</h1>
            <p>New Message Received!</p>
            <p>From: {email}</p>
            <p>Message: {message}</p>
          </>
        ),
      });
    if (userMessageError) {
      return new Response(JSON.stringify({ error: userMessageError }), {
        status: 500,
      });
    }

    //* Send a thank-you email to the user
    // const { data: thankYouData, error: thankYouError } =
    //   await resend.emails.send({
    //     from: fromEmail,
    //     to: [email],
    //     subject: "We Received Your Message!",
    //     react: (
    //       <>
    //         <h1>Thank You!</h1>
    //         <p>Hi {email},</p>
    //         <p>We have received your message and will get back to you soon.</p>
    //       </>
    //     ),
    //   });

    // if (thankYouError) {
    //   return new Response(JSON.stringify({ error: thankYouError }), {
    //     status: 500,
    //   });
    // }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
