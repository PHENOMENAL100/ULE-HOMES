import "../App.css";
import Navbar from "./Navbar";
import PaymentCalculator from "./PaymentCalculator";
import FAQ from "./FAQ";
import CTAFooter from "./CTAFooter";

function RentFinancingPage() {
  return (
    <>
      <Navbar />

      <div className="rent-financing-page">
        <h1 className="rent-title">
          Rent Financing <br /> 
          Models
        </h1>

        <div className="models-grid">
          {/* Model 1 */}
          <div className="rf-model-card">
            <h3>Model 1</h3>
            <p className="choose">Choose this if:</p>
            <ul>
              <li>You have 50% of your rent upfront</li>
              <li>You’re comfortable paying 2.9% monthly interest</li>
              <li>You want to access up to ₦5,000,000</li>
              <li>You want your 50% of your down payment returned with +7% interest.</li>
              <li>You are a salary earner</li>
            </ul>
            <a href="#">Select model →</a>
          </div>

          {/* Model 2 */}
          <div className="rf-model-card">
            <h3>Model 2</h3>
            <p className="choose">Choose this if:</p>
            <ul>
              <li>You don’t want to pay anything upfront</li>
              <li>You can pay 6% monthly interest</li>
              <li>You want to access up to ₦20,000,000 for rent</li>
              <li>You are a salary earner or business owner</li>
            </ul>
            <a href="#">Select model →</a>
          </div>

          {/* Model 3 */}
          <div className="rf-model-card full-width">
            <h3>Model 3</h3>
            <p className="choose">Choose this Model if:</p>
            <ul>
              <li>You can pay 1 month’s rent upfront</li>
              <li>You’re comfortable paying 1.7% monthly interest</li>
              <li>You want to access up to ₦5,000,000</li>
              <li>You are a salary earner or business owner</li>
            </ul>
            <a href="#">Select model →</a>
          </div>
        </div>

        <PaymentCalculator/>
        <FAQ />
        <CTAFooter />
      </div>
    </>
  );
}

export default RentFinancingPage;