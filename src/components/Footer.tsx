import { twMerge } from "tailwind-merge";

export function Footer({ className }: { className?: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={twMerge(
        "mb-4 mt-28 font-medium text-black/40 flex items-center gap-1 mx-auto",
        className
      )}
    >
      <span className="text-2xl">©</span> {currentYear} ZeceLaEN.ro
    </div>
  );
}
