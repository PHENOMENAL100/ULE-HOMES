import "../../App.css";
import RentCards from "../../components/RentCards";
import Hero from "../../components/Hero";
import CustomersLove from "../../components/CustomersLove";
import FAQ from "../../components/FAQ";
import CTAFooter from "../../components/CTAFooter";
import Partners from "../Partners";

function HomePage() {
  return (
    <div>
      <Hero />
      <Partners />
      <RentCards />
      <CustomersLove />
      <FAQ />
      <CTAFooter/>
    </div>
  );
}

export default HomePage;