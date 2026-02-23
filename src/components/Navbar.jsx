import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
import { IoChevronDown } from "react-icons/io5";
import logo from "../assets/ule-logo.png"; // ✅ import logo correctly

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "About",
      sub: [
        { label: "RTO Models", page: "/rent-to-own", id: "rto-calculator" },
        { label: "RF Models", page: "/rent-financing", id: "rf-calculator" },
      ],
    },
    {
      title: "How it works",
      sub: [
        { label: "Visit Social Media", page: "/", id: "social-icons-section" },
      ],
    },
    {
      title: "Learn",
      sub: [
        { label: "CTA", page: "/", id: "cta-footer" },
        { label: "FAQ", page: "/", id: "faq-section" },
      ],
    },
    {
      title: "Product",
      sub: [
        { label: "RTO Calc", page: "/rent-to-own", id: "rto-calculator" },
        { label: "RF Calc", page: "/rent-financing", id: "rf-calculator" },
      ],
    },
  ];

  const scrollToSection = (page, id) => {
    if (window.location.pathname !== page) {
      navigate(page);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <div className="nav-full-width">
      <nav className="navbar">
        {/* Logo → Go Home */}
        <Link to="/" className="logo">
          <img src={logo} alt="ULE Homes logo" /> {/* ✅ updated */}
        </Link>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Menu */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`dropdown ${dropdownOpen === index ? "open" : ""}`}
              onClick={() => item.sub && toggleDropdown(index)}
            >
              <span>
                {item.title}{" "}
                {item.sub && (
                  <span className="arrow">
                    <IoChevronDown />
                  </span>
                )}
              </span>

              {item.sub && (
                <ul className="dropdown-menu">
                  {item.sub.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToSection(subItem.page, subItem.id);
                      }}
                    >
                      {subItem.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Mobile Get Started */}
          <li className="mobile-get-started">
            <button
              className="get-started"
              onClick={() => scrollToSection("/", "cta-footer")}
            >
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;