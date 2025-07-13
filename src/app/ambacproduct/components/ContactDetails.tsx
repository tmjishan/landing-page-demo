"use client";

import React from "react";

export default function LocationMap() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* 🏷️ Tagline */}
        <h2 className="text-3xl font-bold text-center text-[#222] mb-12">
          Our Point
        </h2>

        {/* 📍 Location + Map */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* 📦 Location Box */}
          <div className="bg-[#f2c279] p-8 rounded-xl shadow text-white font-semibold">
            <h3 className="text-2xl mb-4">Our Location</h3>
            <p className="mb-2">SC Amba C. Product SRL</p>
            <p className="mb-2">Str. Zizinului no.109 Bis</p>
            <p className="mb-2">Office Pavilion (Quin) et. 1</p>
            <p className="mb-2">Brașov - Romania</p>
            <p className="mb-2">Tel./Fax: 0268 427.270</p>
            <p className="mb-2">Tel: 0268 427.149</p>
            <p className="mb-2">Mobile: 0722 595.608</p>
            <p className="mb-2">
              E-mail:{" "}
              <a
                href="mailto:office@amba.ro"
                className="underline underline-offset-2"
              >
                office@amba.ro
              </a>
            </p>
            <p>
              Alt:{" "}
              <a
                href="mailto:amba@deltanet.ro"
                className="underline underline-offset-2"
              >
                amba@deltanet.ro
              </a>
            </p>
          </div>

          {/* 🗺️ Map */}
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps?q=Brașov,+Romania&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
