import { useState } from 'react'
import { sendToTelegram } from '../utils/telegramService'

const ContactSection = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      const message = `
━━━━━━━━━━━━━━━━━━
📩 <b>New Contact Message</b>
━━━━━━━━━━━━━━━━━━━━

👤 <b>Name:</b> ${formData.name}
📧 <b>Email:</b> ${formData.email}

💬 <b>Message:</b>
${formData.message}

━━━━━━━━━━━━━━━━━
<i>Sent from portfolio website</i>
━━━━━━━━━━━━━━━━━━`
      await sendToTelegram(message)
      setSubmitStatus({ success: true, message: 'Message sent successfully' })
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Failed to send message' })
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id={id} className="section">
      <div className="container">
        <div className="max-w-md">
          <h2 className="text-xl md:text-2xl font-medium text-[var(--text)] mb-6 md:mb-8">Get in touch</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-0 py-2 md:py-3 bg-transparent border-0 border-b border-[var(--border)] text-[var(--text)] placeholder-[var(--muted)] focus:border-[var(--text)] focus:outline-none transition-colors text-sm md:text-base"
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-0 py-2 md:py-3 bg-transparent border-0 border-b border-[var(--border)] text-[var(--text)] placeholder-[var(--muted)] focus:border-[var(--text)] focus:outline-none transition-colors text-sm md:text-base"
                required
              />
            </div>
            
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                className="w-full px-0 py-2 md:py-3 bg-transparent border-0 border-b border-[var(--border)] text-[var(--text)] placeholder-[var(--muted)] focus:border-[var(--text)] focus:outline-none transition-colors resize-none text-sm md:text-base"
                required
              />
            </div>
            
            {submitStatus && (
              <p className={`text-sm ${submitStatus.success ? 'text-green-600' : 'text-red-600'}`}>
                {submitStatus.message}
              </p>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-sm md:text-base text-[var(--text)] hover:text-[var(--muted)] transition-colors underline underline-offset-4 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection