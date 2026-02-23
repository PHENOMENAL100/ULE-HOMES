import "../App.css";

import techcabal from "../assets/techcabal.png";
import lsetf from "../assets/lsetf.png";
import techpoint from "../assets/techpoint.png";
import antler from "../assets/antler.png";
import nhm from "../assets/nhm.png";
import techparley from "../assets/techparley.png";

function Partners() {
  return (
    <section className="partners-section">
      {/* Small heading */}
      <p className="partners-heading">As featured in</p>

      {/* Logos row */}
      <div className="partners">
        <img src={techcabal} alt="TechCabal" />
        <img src={lsetf} alt="LSETF" />
        <img src={techpoint} alt="TechPoint" />
        <img src={antler} alt="Antler" />
        <img src={nhm} alt="NHM" />
        <img src={techparley} alt="TechParley" />
      </div>
    </section>
  );
}

export default Partners;