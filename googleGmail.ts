/**
 * Construct and send an email via the authorized Google Gmail API.
 */
export async function sendVerificationGmail(
  accessToken: string,
  toEmail: string,
  code: string,
  type: "2FA" | "PASSWORD_RESET"
): Promise<boolean> {
  const subject = type === "2FA"
    ? "TeacherDesk AI: Two-Factor Verification Code [Offline Portal]"
    : "TeacherDesk AI: Password Reset Request [Syllabus Sandbox]";

  const messageTypeLabel = type === "2FA" ? "Two-Factor Auth Security Code" : "Password Reset Code";

  // Construct standard HTML email message
  const textMessage = [
    `To: ${toEmail}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=utf-8`,
    ``,
    `<html>`,
    `  <body style="font-family: 'Inter', sans-serif; background-color: #f8fafc; padding: 40px; color: #1e293b; margin: 0;">`,
    `    <div style="max-width: 500px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; padding: 32px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);">`,
    `      <div style="font-size: 14px; font-weight: 800; color: #0284c7; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">TeacherDesk AI Portal</div>`,
    `      <h2 style="font-size: 20px; font-weight: 700; color: #0f172a; margin: 0 0 16px 0;">Security Verification Required</h2>`,
    `      <p style="font-size: 13px; line-height: 1.5; color: #475569; margin-bottom: 24px;">`,
    `        You requested a security verification for your TeacherDesk offline profile. Below is your 6-digit ${messageTypeLabel}.`,
    `      </p>`,
    `      <div style="text-align: center; margin: 24px 0; background-color: #f1f5f9; padding: 18px; border-radius: 12px; border: 1px dashed #cbd5e1;">`,
    `        <span style="font-size: 32px; font-weight: 800; font-family: monospace; letter-spacing: 6px; color: #0369a1;">${code}</span>`,
    `      </div>`,
    `      <p style="font-size: 11px; color: #64748b; line-height: 1.4; margin-top: 24px;">`,
    `        Note: This code was generated on local workspace time: ${new Date().toLocaleString()} and expires in 15 minutes.`,
    `      </p>`,
    `      <div style="margin-top: 32px; border-top: 1px solid #f1f5f9; padding-top: 16px; font-size: 11px; text-align: center; color: #94a3b8;">`,
    `        TeacherDesk AI &bull; Zambian Curriculum Syllabus Portal`,
    `      </div>`,
    `    </div>`,
    `  </body>`,
    `</html>`
  ].join("\r\n");

  // Base64Url encode function compliant with Gmail API expectations
  const utf8Encoder = new TextEncoder();
  const bytes = utf8Encoder.encode(textMessage);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const base64 = btoa(binary);
  const base64Url = base64
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const url = "https://gmail.googleapis.com/gmail/v1/users/me/messages/send";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      raw: base64Url
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gmail API failure: ${response.status} - ${errorText}`);
  }

  return true;
}
