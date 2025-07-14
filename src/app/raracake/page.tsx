import HeroSection from "./components/HeroSection";
import BusinessInfo from "./components/BusinessInfo";
import ReviewsSection from "./components/ReviewsSection";
import OpeningHours from "./components/OpeningHours";
import Services from "./components/Services";
import Footer from "./components/Footer";

const data = {
  title: "raracake",
  categoryName: "Cake shop",
  address: "Strada Galații Noi, Galați 800422, Romania",
  phone: "+40 758 700 277",
  totalScore: 4.9,
  reviewsCount: 108,
  imageUrl:
    "https://lh3.googleusercontent.com/p/AF1QipPZVMo2hI2rLNmJ2SJz322H-jxV_QDe-ldWgbiZ=w408-h255-k-no",
  url: "https://www.google.com/maps/search/?api=1&query=raracake&query_place_id=ChIJpwXk3ajftkAREx_3LEbAI20",
  openingHours: [
    { day: "Monday", hours: "8 AM to 8 PM" },
    { day: "Tuesday", hours: "8 AM to 8 PM" },
    { day: "Wednesday", hours: "8 AM to 8 PM" },
    { day: "Thursday", hours: "8 AM to 8 PM" },
    { day: "Friday", hours: "8 AM to 8 PM" },
    { day: "Saturday", hours: "8 AM to 5 PM" },
    { day: "Sunday", hours: "8 AM to 5 PM" },
  ],
  additionalInfo: {
    serviceOptions: ["Takeout"],
    planning: ["Quick visit"],
    payments: ["Credit cards", "NFC mobile payments"],
    parking: ["Free parking lot"],
  },
};

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto bg-pink-100/10 shadow-2xl rounded-lg">
      <section>
        <HeroSection image={data.imageUrl} title={data.title} />
        <BusinessInfo {...data} />
        <ReviewsSection score={data.totalScore} count={data.reviewsCount} />
        <OpeningHours hours={data.openingHours} />
        <Services info={data.additionalInfo} />
        <Footer />
      </section>
    </div>
  );
}
