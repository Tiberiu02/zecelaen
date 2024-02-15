import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

export function SimplePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="md:bg-math min-h-screen flex flex-col items-center">
      <NavBar />

      <div className="flex flex-col items-center md:px-4 w-full max-w-5xl">
        <div className="p-8 sm:px-12 sm:py-12 mt-8 gap-16 sm:gap-20 rounded-2xl text-lg text-left text-black justify-center flex flex-col bg-white md:border-[1px] border-gray-200 md:shadow">
          {children}
        </div>

        <Footer className="md:bg-anti-math" />
      </div>
    </main>
  );
}
