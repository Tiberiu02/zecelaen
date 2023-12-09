import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function Card({
  className,
  children,
  cardRef,
}: {
  className?: string;
  children: ReactNode;
  cardRef?: React.Ref<HTMLDivElement>;
}) {
  return (
    <div
      className={twMerge(
        "bg-white md:border-[1px] md:border-gray-200 shadow md:rounded-2xl",
        className
      )}
      ref={cardRef}
    >
      {children}
    </div>
  );
}
