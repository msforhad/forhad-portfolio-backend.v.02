// utils/autoReplyTemplate.js
export const autoReplyHTML = ({ name, brandName = "FO|RH|AD", brandColor = "#2563eb" }) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You</title>
  <style>
    body { margin:0; font-family: Arial, sans-serif; background:#f3f4f6; }
    .container { max-width:600px; margin:20px auto; padding:24px; background:#fff; border-radius:16px; box-shadow:0 6px 24px rgba(0,0,0,.06); }
    .header img { max-width:120px; margin-bottom:12px; }
    h1 { color:#111827; font-size:22px; margin-bottom:8px; }
    p { color:#4b5563; font-size:16px; line-height:1.5; }
    .btn { display:inline-block; background:${brandColor}; color:#fff; padding:10px 16px; border-radius:10px; text-decoration:none; font-weight:600; margin-top:16px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Hi ${name},</h1>
    <p>Thank you for contacting <strong>${brandName}</strong>! We have received your message and will get back to you as soon as possible.</p>
    <p>We appreciate you reaching out and will make sure to respond promptly.</p>
    <a href="https://forhad.dev" class="btn">Visit Our Website</a>
    <p style="margin-top:20px; font-size:12px; color:#9ca3af;">This is an automated message from ${brandName}.</p>
  </div>
</body>
</html>
`;

export const autoReplyTEXT = ({ name, brandName = "FO|RH|AD" }) => 
`Hi ${name},

Thank you for contacting ${brandName}! We have received your message and will get back to you as soon as possible.

Visit our website: https://FO|RH|AD

- ${brandName}`;
