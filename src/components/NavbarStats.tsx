"use client";

import { useStats } from "@/storage/stats";
import { FaFire, FaStar } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

export function NavbarStats() {
  const { stars, streak, activeToday } = useStats();

  return (
    <>
      {streak > 0 && (
        <div className="flex gap-2 mr-4 items-center font-semibold text-red-700">
          <FaFire
            className={twMerge(
              "text-lg mb-[1px]",
              activeToday ? "text-red-500" : "text-red-200"
            )}
          />
          {streak}
        </div>
      )}
      {stars > 0 && (
        <div className="flex gap-2 items-center text-yellow-600 font-semibold">
          <FaStar className="text-xl text-yellow-400 mb-[1px]" />
          {stars}
        </div>
      )}
    </>
  );
}
