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
        "rounded-full border-[2px] duration-150 shadow bg-white border-gray-200",
        active && "cursor-pointer",
        pressed && active && "bg-gray-100 shadow-none translate-y-[2px]",
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
