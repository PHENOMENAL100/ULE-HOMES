import "../App.css";
import { useNavigate } from "react-router-dom";
import rentFinancingImg from "../assets/rent-financing.png";
import rentToOwnImg from "../assets/rent-to-own.png";

function RentCards() {
  const navigate = useNavigate();

  return (
    <section className="rent-cards-section">
      <div className="rent-cards">

        {/* Rent Financing */}
        <div className="card card-purple">
          <div className="card-right">
            <h3>Rent Financing</h3>
            <p>
              No more Rent Stress. ULE covers your bulk rent, you spread repayment in monthly installments.
            </p>
            <button
              className="card-btn-minimal"
              onClick={() => navigate("/rent-financing")}
            >
              Explore <span className="arrow">→</span>
            </button>
          </div>

          <div className="card-left">
            <img src={rentFinancingImg} alt="Rent Financing" className="card-img" />
          </div>
        </div>

        {/* Rent To Own */}
        <div className="card card-cream">
          <div className="card-right">
            <h3>Rent to Own</h3>
            <p>
              Own a Home, Pay Later. Become a Homeowner with just 1.2 Million Naira, spread the payment across 20 years.
            </p>
            <button
              className="card-btn-minimal"
              onClick={() => navigate("/rent-to-own")}
            >
              Explore <span className="arrow">→</span>
            </button>
          </div>

          <div className="card-left">
            <img
              src={rentToOwnImg}
              alt="Rent to Own"
              className="card-img card-img-small"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default RentCards;