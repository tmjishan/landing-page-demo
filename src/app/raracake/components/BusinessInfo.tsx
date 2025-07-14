interface Props {
  title: string;
  categoryName: string;
  address: string;
  phone: string;
  url: string;
}

export default function BusinessInfo({
  title,
  categoryName,
  address,
  phone,
  url,
}: Props) {
  return (
    <section
      className="relative max-w-3xl mx-auto my-12 p-8 rounded-3xl shadow-xl overflow-hidden border border-pink-200 text-gray-800 font-sans"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/pink-paper.png')",
        backgroundColor: "#ffe4e6", // fallback bg
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Optional Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-pink-100/50 backdrop-blur-sm z-0"></div>

      {/* Actual content */}
      <div className="relative z-10">
        <h2 className="text-5xl font-cursive mb-4 text-pink-600 drop-shadow-md">
          {title}
        </h2>

        <p className="inline-block bg-pink-200 text-pink-900 font-semibold rounded-full px-4 py-1 mb-6 shadow-sm">
          {categoryName}
        </p>

        <div className="space-y-5 text-lg leading-relaxed">
          <div className="flex items-center gap-4">
            <span className="text-3xl">📍</span>
            <p>{address}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl">📞</span>
            <p>{phone}</p>
          </div>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block bg-pink-500 text-white px-8 py-3 rounded-full shadow-md font-semibold hover:bg-pink-600 transition duration-300"
        >
          Open in Google Maps
        </a>
      </div>
    </section>
  );
}
