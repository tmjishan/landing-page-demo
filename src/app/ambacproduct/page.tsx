"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ContactDetails from "./components/ContactDetails";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="bg-[#f2c279] text-[#222] min-h-screen font-sans">
      <Navbar />
      {/* 🔥 Hero Section */}
      <HeroSection />

      {/* 📦 Services */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#222]">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-[#f2c279]/30 rounded-xl p-6 text-center shadow hover:shadow-lg transition flex flex-col items-center">
              <div className="w-full max-w-[200px] h-[200px] mx-auto mb-6">
                <Image
                  src="/ambacproduct/box.png"
                  alt="Box Packaging"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">Box Packaging</h3>
            </div>

            <div className="bg-[#f2c279]/30 rounded-xl p-6 text-center shadow hover:shadow-lg transition flex flex-col items-center">
              <div className="w-full max-w-[200px] h-[200px] mx-auto mb-6">
                <Image
                  src="/ambacproduct/label.png"
                  alt="Label & Stickers"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">Label & Stickers</h3>
            </div>

            <div className="bg-[#f2c279]/30 rounded-xl p-6 text-center shadow hover:shadow-lg transition flex flex-col items-center">
              <div className="w-full max-w-[200px] h-[200px] mx-auto mb-6">
                <Image
                  src="/ambacproduct/eco.png"
                  alt="Eco Packaging"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">Eco Packaging</h3>
            </div>
          </div>
        </div>
      </section>

      <ContactDetails />
      {/* 📣 CTA */}
      <section className="py-16 bg-[#f2c279] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Package Your Products Professionally?
        </h2>
        <p className="mb-6 text-[#333]">
          Contact us today for a custom quote tailored to your business needs.
        </p>
        <Link
          href="/contact"
          className="bg-white text-black px-6 py-3 rounded-full font-bold shadow hover:bg-black hover:text-white transition"
        >
          Contact Us
        </Link>
      </section>
      <Footer />
    </main>
  );
}
