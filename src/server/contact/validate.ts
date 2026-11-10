export type ContactInput = {
  email: string;
  subject: string;
  message: string;
};

export const CONTACT_LIMITS = {
  email: 254,
  subject: 150,
  message: 5000,
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Prüft die Eingaben des Kontaktformulars.
 * Gibt die bereinigten Daten zurück oder null, wenn etwas ungültig ist.
 */
export function validateContact(data: unknown): ContactInput | null {
  if (typeof data !== "object" || data === null) return null;

  const { email, subject, message } = data as Record<string, unknown>;
  if (
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string"
  ) {
    return null;
  }

  const cleanEmail = email.trim();
  // Zeilenumbrüche im Betreff entfernen (Schutz vor Header-Einschleusung)
  const cleanSubject = subject.replace(/[\r\n]+/g, " ").trim();
  const cleanMessage = message.trim();

  if (!cleanEmail || !cleanSubject || !cleanMessage) return null;
  if (!EMAIL_PATTERN.test(cleanEmail)) return null;
  if (cleanEmail.length > CONTACT_LIMITS.email) return null;
  if (cleanSubject.length > CONTACT_LIMITS.subject) return null;
  if (cleanMessage.length > CONTACT_LIMITS.message) return null;

  return { email: cleanEmail, subject: cleanSubject, message: cleanMessage };
}
