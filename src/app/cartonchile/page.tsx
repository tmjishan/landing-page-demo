import CategoriesPageSection from "./components/CategoriesPageSection";
import Description from "./components/Description";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="cartonchileBody min-h-screen">
        <Navbar />
      </div>
      <Description />
      <CategoriesPageSection />
    </div>
  );
}
