import { validateContact } from "@/server/contact/validate";
import { sendContactMail } from "@/server/contact/sendContactMail";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const input = validateContact(body);
  if (!input) {
    return Response.json({ error: "invalid_input" }, { status: 400 });
  }

  try {
    const sent = await sendContactMail(input);
    if (!sent) {
      return Response.json({ error: "send_failed" }, { status: 500 });
    }
    return Response.json({ success: true });
  } catch (error) {
    console.error("Unerwarteter Fehler beim Senden:", error);
    return Response.json({ error: "send_failed" }, { status: 500 });
  }
}
