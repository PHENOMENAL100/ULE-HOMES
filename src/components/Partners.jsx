import "../App.css";

function Partners() {
  return (
    <section className="partners-section">
      {/* Small heading */}
      <p className="partners-heading">As featured in</p>

      {/* Logos row */}
      <div className="partners">
        <img src="/src/assets/techcabal.png" alt="TechCabal" />
        <img src="/src/assets/lsetf.png" alt="LSETF" />
        <img src="/src/assets/techpoint.png" alt="TechPoint" />
        <img src="/src/assets/antler.png" alt="Antler" />
        <img src="/src/assets/nhm.png" alt="NHM" />
        <img src="/src/assets/techparley.png" alt="TechParley" />
      </div>
    </section>
  );
}

export default Partners;