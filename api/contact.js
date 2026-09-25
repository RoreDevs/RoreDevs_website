import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  if (!body || typeof body === 'string') {
    // Vercel sometimes gives raw string body for non-Next projects
    body = JSON.parse(body || '{}');
  }

  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'RoreDevs Contact <hello@roredevs.tech>',
      to: 'roredevs.hq@gmail.com',
      replyTo: email,
      subject: `New message: ${subject}`,
      text: `From: ${name} (${email})\nSubject: ${subject}\n\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}