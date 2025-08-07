export default function ContactForm() {
  return (
    <section className="py-20 px-6 bg-white" id="contact-form">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Get In Touch</h2>
        <div className="w-full aspect-video">
          <iframe
            src="<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeXn4yu69hqjvi-MwA805qadisz1xGTPXU_Vibe1FuIMbuLUQ/viewform?embedded=true" width="640" height="959" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Contact Form"
            allowFullScreen
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
}
