import { useState, useEffect } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { sendToTelegram } from '../utils/telegramService'
import { useLocation } from 'react-router-dom'

const ContactSection = ({ id }) => {
  const location = useLocation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    if (location.state && location.state.plan) {
      setFormData(prev => ({
        ...prev,
        subject: `Inquiry about the ${location.state.plan} Plan`
      }))
    }
  }, [location.state])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  
  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Format message for Telegram
      const message = `
<b>📩 New Contact Form Submission</b>

<b>👤 Name:</b> ${formData.name}
<b>📧 Email:</b> ${formData.email}
<b>📝 Subject:</b> ${formData.subject}

<b>💬 Message:</b> ${formData.message}`

      
      await sendToTelegram(message)
      
      setSubmitStatus({ success: true, message: 'Message sent successfully!' })
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-[var(--accent-color)] text-xl mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p>evanskumi466@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhone className="text-[var(--accent-color)] text-xl mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p>+233 (503) 825 112 </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[var(--accent-color)] text-xl mt-1" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p>Tema, Ghana</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none"
                    style={{
                      backgroundColor: 'var(--section-bg)',
                      borderColor: 'var(--accent-color)',
                      color: 'var(--text-color)'
                    }}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none"
                    style={{
                      backgroundColor: 'var(--section-bg)',
                      borderColor: 'var(--accent-color)',
                      color: 'var(--text-color)'
                    }}
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none"
                  style={{
                    backgroundColor: 'var(--section-bg)',
                    borderColor: 'var(--accent-color)',
                    color: 'var(--text-color)'
                  }}
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none"
                  style={{
                    backgroundColor: 'var(--section-bg)',
                    borderColor: 'var(--accent-color)',
                    color: 'var(--text-color)'
                  }}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              
              {submitStatus && (
                <div className={`text-sm ${submitStatus.success ? 'text-green-500' : 'text-red-500'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-md font-medium transition-colors relative"
                style={{
                  backgroundColor: 'var(--accent-color)',
                  color: 'white',
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                {isSubmitting ? (
                  <>
                    <span className="opacity-0">Send Message</span>
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection