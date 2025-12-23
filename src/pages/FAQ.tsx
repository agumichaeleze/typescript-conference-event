import { faqs } from "@/data/faqs";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;

          return (
            <div key={i} className="border rounded-lg p-4">
              <button
                onClick={() => toggle(i)}
                className="flex justify-between items-center w-full font-semibold text-left"
              >
                {faq.question}
                {isOpen ? <ChevronUp /> : <ChevronDown />}
              </button>

              {isOpen && (
                <p className="mt-3 ">{faq.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
