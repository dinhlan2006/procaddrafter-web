import React from "react";

const faqs = [
  {
    question: "Do you offer residential services?",
    answer:
      "Yes, our experienced team is available 24/7 to provide high-quality drawings and design for residential homes to large-scale industrial projects.",
  },
  {
    question: "Is my data secure in CAD Drafter?",
    answer:
      "Absolutely. We ensure maximum security of your blueprints and project information using encrypted storage.",
  },
  {
    question: "Do you provide consultancy?",
    answer:
      "Yes, we offer design consultancy for pre-construction, MEP, structural, and architectural drafting.",
  },
  {
    question: "How is CAD drafting carried out?",
    answer:
      "We use AutoCAD, Revit, Civil 3D, and other tools to generate precise 2D/3D CAD drawings, tailored to your specifications.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-gray-50 py-20 px-6" id="faq">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2 text-blue-900">{faq.question}</h4>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
