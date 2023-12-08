"use client";

import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

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
        active &&
          "cursor-pointer hover:bg-gray-100 hover:shadow-none hover:translate-y-[2px]",
        pressed && active && "bg-gray-100 shadow-none translate-y-[2px]",
        className
      )}
      onClick={onClick}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      onPointerCancel={() => setPressed(false)}
      onPointerOut={() => setPressed(false)}
    >
      {children}
    </div>
  );
}
