import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useEffect } from "react";

const starsAtom = atomWithStorage("stars", 0);
const streakAtom = atomWithStorage("streak", 0);
const lastStreakDateAtom = atomWithStorage("lastStreakDate", "2002-06-01");

export function useStats() {
  const [stars, setStars] = useAtom(starsAtom);
  const [streak, setStreak] = useAtom(streakAtom);
  const [lastStreakDate, setLastStreakDate] = useAtom(lastStreakDateAtom);

  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 864e5).toISOString().split("T")[0];

  function incrementStars(amount: number) {
    setStars((prev) => prev + amount);

    if (lastStreakDate === yesterday) {
      setStreak((prev) => prev + 1);
      setLastStreakDate(today);
    } else if (lastStreakDate !== today) {
      setStreak(1);
      setLastStreakDate(today);
    }
  }

  const actualStreak =
    lastStreakDate === today || lastStreakDate === yesterday ? streak : 0;
  const activeToday = lastStreakDate === today;

  return {
    stars,
    incrementStars,
    streak: actualStreak,
    activeToday,
  };
}
