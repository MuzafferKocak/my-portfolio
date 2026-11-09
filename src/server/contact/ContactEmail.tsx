import type { ContactInput } from "./validate";

export function ContactEmail({ email, subject, message }: ContactInput) {
  return (
    <>
      <h1>{subject}</h1>
      <p>New Message Received!</p>
      <p>From: {email}</p>
      <p>Message: {message}</p>
    </>
  );
}
