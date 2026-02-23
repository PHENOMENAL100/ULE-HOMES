import { useState } from "react";
import "../App.css"; // Make sure the CSS below is included or added

function PaymentCalculatorRentToOwn() {
  const [loanAmount, setLoanAmount] = useState(1200000); // Example default
  const [downPayment, setDownPayment] = useState(0);
  const [interestRate, setInterestRate] = useState(6); // monthly %
  const [loanTerm, setLoanTerm] = useState(20); // years

  // Monthly repayment calculation
  const principal = loanAmount - downPayment;
  const monthlyRate = interestRate / 100;
  const months = loanTerm * 12;
  const monthlyPayment = ((principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months))).toFixed(0);
  const totalRepayment = (monthlyPayment * months).toFixed(0);

  return (
    <section className="rent-to-own-calculator">
      <h2 className="calculator-title">Payment Calculator</h2>

      <div className="calculator-grid">
        {/* Loan Amount */}
        <div className="calculator-card">
          <label>Loan Amount</label>
          <div className="calculator-value">₦{loanAmount.toLocaleString()}</div>
        </div>

        {/* Down Payment */}
        <div className="calculator-card">
          <label>Down Payment</label>
          <div className="calculator-value">₦{downPayment.toLocaleString()}</div>
        </div>

        {/* Total Interest */}
        <div className="calculator-card">
          <label>Total Interest</label>
          <div className="calculator-value">₦{(totalRepayment - principal).toLocaleString()}</div>
        </div>

        {/* Loan Term & Interest Rate */}
        <div className="calculator-card">
          <label>Loan Term & Interest Rate</label>
          <div className="calculator-value">{loanTerm} years @ {interestRate}% p.m.</div>
        </div>

        {/* Monthly Payment */}
        <div className="calculator-card full-width">
          <label>Estimated Monthly Payment</label>
          <div className="calculator-value">₦{monthlyPayment.toLocaleString()}</div>
        </div>
      </div>
    </section>
  );
}

export default PaymentCalculatorRentToOwn;