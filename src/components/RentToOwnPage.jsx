import { useState } from "react";
import "../App.css";
import Navbar from "./Navbar";
import FAQ from "./FAQ";
import CTAFooter from "./CTAFooter";
import PaymentCalculator from "./PaymentCalculator";

function RentToOwnPage() {
  const [selectedModel, setSelectedModel] = useState(null);

  const models = [
    {
      title: "Model 1",
      description:
        "For self-employed Nigerians living in the country who want to stop renting and finally own a home. Get funding to secure your dream property, with repayment that fits your salary.",
      loanAmount: 5000000,
      downPayment: 2500000,
      interestRate: 2.9,
      termMonths: 12,
    },
    {
      title: "Model 2",
      description:
        "For paid-employed Nigerians living in the country who want to stop renting and finally own a home. Get financing with repayment that fits your salary, to secure your dream property.",
      loanAmount: 20000000,
      downPayment: 0,
      interestRate: 6,
      termMonths: 24,
    },
    {
      title: "Model 3",
      description:
        "For Nigerians working abroad who want a home to return to without the stress of building costs and construction supervision.",
      loanAmount: 5000000,
      downPayment: 416666,
      interestRate: 1.7,
      termMonths: 12,
    },
    {
      title: "Model 4",
      description:
        "For Nigerian business owners abroad, who want a home in Nigeria without risks. Rent-to-Own ensures you own your dream home with security and confidence.",
      loanAmount: 8000000,
      downPayment: 0,
      interestRate: 3.5,
      termMonths: 24,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="rent-to-own-page">
        <h1 className="rent-title">Rent to Own</h1>

        <div className="models-grid">
          {models.map((model, index) => (
            <div key={index} className="rto-model-card">
              <h3>{model.title}</h3>

              <p className="choose">Choose this if:</p>

              <p>{model.description}</p>

              <span
                className="select-model"
                onClick={() => setSelectedModel(model)}
              >
                Select model →
              </span>
            </div>
          ))}
        </div>

        {selectedModel && <PaymentCalculator model={selectedModel} />}

        <FAQ />
        <CTAFooter />
      </div>
    </>
  );
}

export default RentToOwnPage;