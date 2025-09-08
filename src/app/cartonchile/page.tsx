import CategoriesPageSection from "./components/CategoriesPageSection";
import ContactBlock from "./components/ContactBlock";
import ContactCta from "./components/ContactCta";
import Description from "./components/Description";
import Navbar from "./components/Navbar";
import ProcesoProductivo from "./components/ProcesoProductivo";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <div>
      <div className="cartonchileBody min-h-screen">
        <Navbar />
      </div>
      <Description />
      <CategoriesPageSection />
      <ProcesoProductivo />
      <ContactCta />
      <ContactBlock />
      <SiteFooter />
    </div>
  );
}
