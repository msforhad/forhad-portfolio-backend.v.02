// utils/emailTemplate.js
export const contactEmailHTML = ({ name, email, phone, message, brandName = "FO|RH|AD", brandColor = "#4f46e5",}) => {
  const esc = (s="") => String(s)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");

  return `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <title>New message from ${esc(name)}</title>
    <style>
      /* Mobile tweaks */
      @media only screen and (max-width: 600px) {
        .container { width: 100% !important; padding: 16px !important; }
        .card { padding: 16px !important; }
        .h1 { font-size: 20px !important; }
      }
      /* Dark mode aware (many clients ignore, but harmless) */
      @media (prefers-color-scheme: dark) {
        .card { background: #111827 !important; color: #e5e7eb !important; }
        .muted { color: #9ca3af !important; }
        .divider { border-color: #1f2937 !important; }
      }
      /* Button hover (some clients support) */
      .btn:hover { opacity: .9; }
    </style>
  </head>
  <body style="margin:0;background:#f3f4f6;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3f4f6;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" class="container" width="600" cellspacing="0" cellpadding="0" style="width:600px;max-width:100%;background:transparent;">

            <!-- Card -->
            <tr>
              <td class="card" style="background:#ffffff;border-radius:16px;padding:24px;box-shadow:0 6px 24px rgba(0,0,0,.06);">
                <h1 class="h1" style="margin:0 0 8px;font-size:22px;line-height:1.3;color:#111827;font-weight:700;">New Contact Form Message</h1>
                <p class="muted" style="margin:0 0 16px;color:#6b7280;font-size:14px;">You received a new message on <strong>${esc(brandName)}</strong>.</p>

                <hr class="divider" style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;">

                <!-- Info grid -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 8px;">
                  <tr>
                    <td style="padding:8px 0;width:120px;color:#6b7280;font-size:14px;">Name</td>
                    <td style="padding:8px 0;font-size:15px;color:#111827;font-weight:600;">${esc(name)}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;width:120px;color:#6b7280;font-size:14px;">Email</td>
                    <td style="padding:8px 0;font-size:15px;">
                      <a href="mailto:${esc(email)}" style="color:${esc(brandColor)};text-decoration:none;">${esc(email)}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;width:120px;color:#6b7280;font-size:14px;">Phone</td>
                    <td style="padding:8px 0;font-size:15px;color:#111827;">${esc(phone)}</td>
                  </tr>
                </table>

                <!-- Message box -->
                <div style="margin:12px 0 20px;padding:16px;border:1px solid #e5e7eb;border-radius:12px;background:#fafafa;">
                  <div style="font-size:13px;color:#6b7280;margin-bottom:6px;">Message</div>
                  <div style="white-space:pre-wrap;font-size:15px;line-height:1.6;color:#111827;">${esc(message)}</div>
                </div>

                <!-- CTA -->
                <table role="presentation" cellspacing="0" cellpadding="0">
                  <tr>
                    <td>
                      <a class="btn" href="mailto:${esc(email)}" 
                         style="display:inline-block;background:${esc(brandColor)};color:#ffffff;padding:10px 16px;border-radius:10px;text-decoration:none;font-weight:600;font-size:14px;">
                        Reply to ${esc(name)}
                      </a>
                    </td>
                  </tr>
                </table>

                <hr class="divider" style="border:none;border-top:1px solid #e5e7eb;margin:20px 0 12px;">

                <p class="muted" style="margin:0;color:#9ca3af;font-size:12px;">
                  This email was sent from the contact form on ${esc(brandName)}.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="padding:14px 8px;color:#9ca3af;font-size:12px;">
                © ${new Date().getFullYear()} ${esc(brandName)} — All rights reserved.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
};

export const contactEmailTEXT = ({ name, email, phone, message, brandName = "Forhad.dev" }) => 
`New Contact Form Message - ${brandName}

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
`;
