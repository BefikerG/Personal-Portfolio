import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// Nodemailer transporter — configure via environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER || 'befikergezahegn196@gmail.com',
    pass: process.env.SMTP_PASS || '', // Gmail App Password required
  },
})

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  try {
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER || 'befikergezahegn196@gmail.com'}>`,
      to: 'befikergezahegn196@gmail.com',
      subject: `Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: monospace; background: #0d0d0d; color: #e8e8e8; padding: 32px; max-width: 600px;">
          <div style="border: 1px solid #22c55e; padding: 24px;">
            <p style="color: #22c55e; font-size: 12px; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 16px;">
              // new_portfolio_message
            </p>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="color: #5a5a5a; padding: 8px 12px; border-bottom: 1px solid #3a3a3a;">Name</td>
                <td style="color: #e8e8e8; padding: 8px 12px; border-bottom: 1px solid #3a3a3a;">${name}</td>
              </tr>
              <tr>
                <td style="color: #5a5a5a; padding: 8px 12px; border-bottom: 1px solid #3a3a3a;">Email</td>
                <td style="color: #e8e8e8; padding: 8px 12px; border-bottom: 1px solid #3a3a3a;">${email}</td>
              </tr>
              <tr>
                <td style="color: #5a5a5a; padding: 8px 12px; vertical-align: top;">Message</td>
                <td style="color: #b0b0b0; padding: 8px 12px; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
    }

    if (process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions)
      console.log(`Email sent from ${name} (${email})`)
    } else {
      // Dev mode: just log
      console.log(`[DEV] Contact form submission from ${name} (${email}): ${message}`)
    }

    res.json({ success: true, message: 'Message received successfully' })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ error: 'Failed to send message. Please try again later.' })
  }
})

app.get('/api/proxy/github', async (req, res) => {
  try {
    const response = await fetch('https://api.github.com/users/BefikerG/repos?sort=updated&per_page=10')
    const data = await response.json()
    res.json(data)
  } catch (error) {
    console.error('GitHub API error:', error)
    res.status(500).json({ error: 'Failed to fetch GitHub repos' })
  }
})

app.listen(PORT, () => {
  console.log(`Portfolio server running on http://localhost:${PORT}`)
})
