"use client";

import { createContext, useState } from "react";
import { twMerge } from "tailwind-merge";

export const HoverContext = createContext(false);

export function Button({
  children,
  className,
  onClick,
  active = true,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  active?: boolean;
}) {
  const [pressed, setPressed] = useState(false);

  return (
    <div
      className={twMerge(
        "relative rounded-full border-2 duration-150 shadow bg-white border-gray-200 select-none",
        active && "cursor-pointer",
        pressed && active && "bg-gray-100 shadow-none translate-y-[2px]",
        // Fake element to increase the hitbox when hovering so that translations don't glitch
        active &&
          "after:content-[''] after:absolute after:inset-0 after:rounded-full after:m-[-2px]",
        active && pressed && "after:scale-y-110",
        className
      )}
      onClick={onClick}
      onPointerEnter={() => setPressed(true)}
      onPointerLeave={() => setPressed(false)}
    >
      <HoverContext.Provider value={pressed}>{children}</HoverContext.Provider>
    </div>
  );
}
