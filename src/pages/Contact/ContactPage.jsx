import { useState } from 'react'
import Button from '../../ui/button/Button'
import styles from './Contact.module.css'

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(form) // replace with API call
    setSubmitted(true)
  }

  return (
    <div className="container">
      <section className={styles.hero}>
        <h1>Contact Us</h1>
        <p>Have questions or need support? Reach out to us and we'll respond as soon as possible.</p>
      </section>

      <section className={styles.formSection}>
        {submitted ? (
          <div className={styles.successMessage}>
            <h2>Thank you!</h2>
            <p>Your message has been sent. We'll get back to you shortly.</p>
          </div>
        ) : (
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              required
            />
            <Button type="submit" size="lg" fullWidth>
              Send Message
            </Button>
          </form>
        )}
      </section>

      <section className={styles.contactInfo}>
        <h2>Other Ways to Reach Us</h2>
        <p>Email: support@gamingplatform.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Follow us on social media for updates and announcements.</p>
      </section>
    </div>
  )
}

export default ContactPage
