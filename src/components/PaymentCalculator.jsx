import { useState } from "react";

function PaymentCalculator() {
  const [amount, setAmount] = useState(0);
  const [interest, setInterest] = useState(9.75);
  const [years, setYears] = useState(0);

  const principal = parseFloat(amount) || 0;
  const monthlyRate = ((parseFloat(interest) || 0) / 100) / 1; // monthly interest
  const months = (parseFloat(years) || 0) * 12;

  const monthlyPayment =
    months > 0
      ? (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months))
      : 0;

  const totalRepayment = monthlyPayment * months;
  const totalInterest = totalRepayment - principal;
  const downPayment = principal * 0.5; // Example

  // Generate monthly breakdown
  const breakdown = [];
  let remaining = principal;
  for (let i = 1; i <= months; i++) {
    const interestPayment = remaining * monthlyRate;
    const principalPayment = monthlyPayment - interestPayment;
    remaining -= principalPayment;
    breakdown.push({
      month: i,
      monthlyPayment: monthlyPayment,
      remainingBalance: remaining > 0 ? remaining : 0,
    });
  }

  return (
    <section className="payment-calculator">
      <h2 className="calculator-title">Payment Calculator</h2>

      <div className="calculator-inputs">
        <div>
          <label>Amount</label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
        </div>
        <div>
          <label>Monthly interest rate (%)</label>
          <input type="number" value={interest} onChange={e => setInterest(e.target.value)} />
        </div>
        <div>
          <label>Duration (Years)</label>
          <input type="number" value={years} onChange={e => setYears(e.target.value)} />
        </div>
      </div>

      <div className="total-repayment">
        <p>Total Repayment</p>
        <h3>₦{totalRepayment.toFixed(2)}</h3>
      </div>

      <div className="calculator-cards">
        <div className="calc-card">
          <div className="calc-card-header">Monthly Repayment</div>
          <h4>₦{monthlyPayment.toFixed(2)}</h4>
        </div>
        <div className="calc-card">
          <div className="calc-card-header">Loan Amount</div>
          <h4>₦{principal.toFixed(2)}</h4>
        </div>
        <div className="calc-card">
          <div className="calc-card-header">Down Payment</div>
          <h4>₦{downPayment.toFixed(2)}</h4>
        </div>
        <div className="calc-card">
          <div className="calc-card-header">Total Interest</div>
          <h4>₦{totalInterest.toFixed(2)}</h4>
        </div>
        <div className="calc-card">
          <div className="calc-card-header">Loan Term</div>
          <h4>{months} months</h4>
        </div>
        <div className="calc-card">
          <div className="calc-card-header">Interest Rate</div>
          <h4>{(monthlyRate * 100).toFixed(2)}%</h4>
        </div>
      </div>

      {months > 0 && (
        <table className="payment-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Monthly Payment</th>
              <th>Remaining Balance</th>
            </tr>
          </thead>
          <tbody>
            {breakdown.map((item) => (
              <tr key={item.month}>
                <td>{item.month}</td>
                <td>₦{item.monthlyPayment.toFixed(2)}</td>
                <td>₦{item.remainingBalance.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default PaymentCalculator;