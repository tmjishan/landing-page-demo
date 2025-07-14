"use client";
import { useEffect, useState } from "react";

interface Props {
  hours: { day: string; hours: string }[];
}

export default function OpeningHours({ hours }: Props) {
  const [today, setToday] = useState("");

  useEffect(() => {
    const dayIndex = new Date().getDay();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    setToday(days[dayIndex]);
  }, []);

  return (
    <div className="p-6 bg-white shadow-md">
      <h3 className="text-xl font-bold mb-4 text-gray-800">🕒 Opening Hours</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {hours.map((item, index) => {
          const isToday = item.day === today;

          return (
            <div
              key={index}
              className={`flex items-center justify-between px-4 py-3 rounded-full border 
                ${
                  isToday
                    ? "bg-yellow-200 border-yellow-400 text-yellow-900 font-semibold animate-pulse shadow"
                    : "bg-gray-50 text-gray-700 border-gray-200"
                }
              `}
            >
              <span>{item.day}</span>
              <span className="font-mono">{item.hours}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
