import { FaStar, FaFire } from "react-icons/fa6";
import { NavbarMenu } from "./NavbarMenu";
import { NavbarStats } from "./NavbarStats";

export const NAVBAR_HEIGHT = "4rem";

export function NavBar({ showStats = true }: { showStats?: boolean }) {
  return (
    <div
      className="w-full z-10 select-none text-lg font-medium text-left text-black mb-0 flex flex-col justify-center items-center bg-white border-[1px] border-t-0 border-gray-200 shadow md:sticky top-0"
      style={{ height: NAVBAR_HEIGHT }}
    >
      <div className="max-w-5xl w-full flex items-center px-4">
        <a className="font-bold text-2xl" href="/">
          10<sup>N</sup>
        </a>
        <div className="w-full"></div>
        {showStats && <NavbarStats />}
        <div className="w-full"></div>

        <NavbarMenu />
      </div>
    </div>
  );
}
