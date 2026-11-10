import { Resend } from "resend";
import { ContactEmail } from "./ContactEmail";
import type { ContactInput } from "./validate";

/**
 * Schickt die Nachricht aus dem Kontaktformular per Resend an dich.
 * Gibt true zurück, wenn es geklappt hat.
 */
export async function sendContactMail(input: ContactInput): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.FROM_EMAIL;
  const to = process.env.TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("Mail-Konfiguration fehlt (RESEND_API_KEY, FROM_EMAIL, TO_EMAIL).");
    return false;
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    subject: input.subject,
    react: <ContactEmail {...input} />,
  });

  if (error) {
    console.error("Resend-Fehler:", error);
    return false;
  }
  return true;
}
