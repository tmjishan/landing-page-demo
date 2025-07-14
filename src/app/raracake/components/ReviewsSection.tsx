interface Props {
  score: number;
  count: number;
}

export default function ReviewsSection({ score, count }: Props) {
  return (
    <section className="max-w-md mx-auto my-10 p-8 bg-pink-50 rounded-3xl shadow-md border border-pink-200 text-pink-800 font-sans">
      <h3 className="text-3xl font-cursive mb-6 flex items-center gap-3 text-pink-600 drop-shadow-md">
        ⭐ Customer Reviews
      </h3>

      <div className="flex items-center justify-between mb-6">
        {/* Score */}
        <div className="flex items-center gap-4">
          <div className="text-5xl font-extrabold text-pink-500 drop-shadow-md">
            {score.toFixed(1)}
          </div>
          <div className="flex space-x-1 text-pink-400 text-2xl">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={i < Math.floor(score) ? "opacity-100" : "opacity-30"}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Total reviews */}
        <div className="text-pink-700 font-semibold text-lg italic">
          {count} Reviews
        </div>
      </div>

      {/* Subtext */}
      <p className="text-center italic text-pink-700 text-base tracking-wide">
        "Loved by our customers! 🍰"
      </p>
    </section>
  );
}
