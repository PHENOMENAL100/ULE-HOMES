import { useNavigate, useLocation } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import houseImg from "../assets/house.png";
import logo from "../assets/ule-logo.png";

function CTAFooter() {
  const navigate = useNavigate();
  const location = useLocation();

  const goHomeTop = () => {
    if (location.pathname !== "/") {
      // Not on home page, navigate to home first
      navigate("/");
      // Wait a bit for home page to render, then scroll
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 150);
    } else {
      // Already on home page, just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ================= CTA SECTION ================= */}
      <section id="cta-footer" className="cta-section">
        <div className="cta-container">
          <div className="cta-left">
            <h2 className="cta-title">Ready to Take the First Step?</h2>
            <p className="cta-text">
              Home ownership is no longer a dream,<br />
              It’s a form away.
            </p>
            <button className="cta-btn" id="cta-get-started">
              Start your application
            </button>
          </div>

          <div className="cta-right">
            <img src={houseImg} alt="House and keys" className="cta-img" />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            {/* Clickable Logo */}
            <img
              src={logo}
              alt="ULE Homes Logo"
              className="footer-logo"
              style={{ cursor: "pointer" }}
              onClick={goHomeTop}
            />
            <p className="footer-text">
              Empowering you with affordable housing finance. Join Ule Homes today.
            </p>

            <div id="social-icons-section" className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* RIGHT LINKS */}
          <div className="footer-links">
            <div className="footer-link-group">
              <h4>Company</h4>
              <a href="/about">About Ule</a>
              <a href="#cta-footer">How it works</a>
              <a href="#faq-section">FAQs</a>
              <a href="/contact">Contact</a>
              <a href="/careers">Careers</a>
            </div>

            <div className="footer-link-group">
              <h4>Product</h4>
              <a href="/property-managers">Ule for property managers</a>
              <a href="/companies">Ule for companies</a>
              <a href="/eligibility">Eligibility checker</a>
              <a href="/calculator">Loan calculator</a>
            </div>

            <div className="footer-link-group">
              <h4>Security</h4>
              <a href="/terms">Terms & conditions</a>
              <a href="/privacy">Privacy policy</a>
              <a href="/cookies">Cookies policy</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>All Rights Reserved. 2026 Ule Homes</p>
        </div>
      </footer>
    </>
  );
}

export default CTAFooter;