import '../components/contact.css';

function Contact() {
  return (
    <div>
        <section className="cform-section">
      <h1>Get in Touch</h1>
      <p>
        We'd love to hear from you! Whether you have a question, feedback, or
        just want to say hello, please don't hesitate to reach out.
      </p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message"></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </section>
    </div>
  )
}

export default Contact;