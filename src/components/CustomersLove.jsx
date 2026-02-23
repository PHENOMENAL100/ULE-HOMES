import customer1 from "../assets/customer1.png";
import customer2 from "../assets/customer2.png";
import customer3 from "../assets/customer3.png";

function CustomersLove() {
  return (
    <section className="customer-love">
      <h2 className="customer-love-title">
        Why Our Customers <br /> Loves Ule Homes
      </h2>

      <div className="customer-cards">

        <div className="customer-card">
          <div className="image-wrapper">
            <img src={customer1} alt="Jane Smith" className="customer-img" />
            <div className="play-icon">▶</div>
            <div className="testimonial-overlay">
              “ULE Homes helped take the burden of first-time resettlement rent package off.”
            </div>
          </div>
          <div className="customer-meta">
            <p className="customer-name">Jane Smith</p>
            <p className="customer-location">Lagos. Model 2</p>
          </div>
        </div>

        <div className="customer-card">
          <div className="image-wrapper">
            <img src={customer2} alt="John Doe" className="customer-img" />
            <div className="play-icon">▶</div>
            <div className="testimonial-overlay">
              “ULE Homes made owning our first home stress-free.”
            </div>
          </div>
          <div className="customer-meta">
            <p className="customer-name">John Doe</p>
            <p className="customer-location">Abuja. Model 3</p>
          </div>
        </div>

        <div className="customer-card">
          <div className="image-wrapper">
            <img src={customer3} alt="Mary Jane" className="customer-img" />
            <div className="play-icon">▶</div>
            <div className="testimonial-overlay">
              “ULE Homes removed the burden of relocation completely.”
            </div>
          </div>
          <div className="customer-meta">
            <p className="customer-name">Mary Jane</p>
            <p className="customer-location">Port Harcourt. Model 2</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CustomersLove;