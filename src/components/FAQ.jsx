import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function CustomersFAQ() {
  const faqItems = [
    {
      question: "How do I get started?",
      answer:
        "To get started, simply choose a product to explore, either Rent Financing or Rent-to-Own. Complete a short KYC form. Await approval and disbursement.",
    },
    {
      question: "What is repayment structure?",
      answer:
        "Repayment structure depends on the product selected. Flexible monthly, quarterly, or yearly options are available after KYC approval.",
    },
    {
      question: "Is this only for salary earners?",
      answer:
        "No, this is open to all eligible clients. Both salaried and self-employed clients can access Rent Financing or Rent-to-Own.",
    },
    {
      question: "Is a credit score necessary?",
      answer:
        "Credit score is considered but not mandatory. Eligibility is evaluated based on documents provided.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([]);
  const location = useLocation();

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  // Scroll to FAQ if URL has #faq-section
  useEffect(() => {
    if (location.hash === "#faq-section") {
      const element = document.getElementById("faq-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section className="faq-section" id="faq-section">
      <h2 className="faq-title">FAQ Section</h2>
      <p className="faq-subheading">
        Find quick answers to some of the most common questions <br />
        about our mortgage financing.
      </p>

      <div className="faq-container">
        {faqItems.map((item, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <div key={index} className="faq-item">
              <div
                className={`faq-question ${isOpen ? "open" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                <span className={`plus ${isOpen ? "rotate" : ""}`}>
                 {/* {isOpen ? "−" : "+"}*/}
                </span>
              </div>
              {isOpen && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CustomersFAQ;