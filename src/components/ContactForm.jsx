// src/components/ContactForm.jsx
export default function ContactForm() {
  return (
    <section id="contact-form" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>

        <form
          action="https://formspree.io/f/mldlywbl"  // <-- dán endpoint của bạn vào đây
          method="POST"
          encType="multipart/form-data"
          className="space-y-6"
        >
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border rounded-md p-3"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border rounded-md p-3"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Upload Drawing (PDF/DWG)</label>
            <input
              type="file"
              name="file"
              accept=".pdf,.dwg"
              className="w-full"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full border rounded-md p-3"
              placeholder="Your Project Details..."
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Send Request
          </button>
        </form>
      </div>
    </section>
  );
}
