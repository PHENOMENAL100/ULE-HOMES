import "../App.css";
import personImg from "../assets/person.png";

function Hero() {
  return (
    <section className="hero">
      {/* Left text */}
      <div className="hero-text">
        <h1 className="hero-title">
          Get Your Rent <br />
          Paid, <span
          className="purple">Keep</span> <br />
          <span className="purple">Cash Flowing</span>
        </h1>

        <p>
          Own or Rent, ULE pays for you, you repay flexibly
        </p>

        <button className="hero-btn">Explore</button>
      </div>

      {/* Right image */}
      <div className="hero-image">
        <img src={personImg} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;