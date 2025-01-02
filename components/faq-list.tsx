export default function FAQ() {
  const faqs = [
    {
      question: "What's your background?",
      answer: "Click to ask about my education and work experience.",
    },
    {
      question: "What are your hobbies?",
      answer: "Click to learn about my interests outside of work.",
    },
    {
      question: "What projects have you worked on?",
      answer: "Click to explore my portfolio of projects.",
    },
    {
      question: "What's your favorite programming language?",
      answer: "Click to find out which language I enjoy coding in the most.",
    },
  ];

  return (
    <div className="max-w-xl items-center mx-auto h-[290px] mt-6">
      {faqs.map((faq, index) => (
        <div key={index} className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-md font-medium">
            {faq.question}
          </div>
          <div className="collapse-content flex gap-1">
            <p>{faq.answer}</p>
            <button className="btn btn-active btn-xs btn-ghost">Ask AI</button>
          </div>
        </div>
      ))}
    </div>
  );
}
