import { FaStar, FaFire } from "react-icons/fa6";
import { NavbarMenu } from "./NavbarMenu";

export const NAVBAR_HEIGHT = "4rem";

export function NavBar({ showStats = true }: { showStats?: boolean }) {
  return (
    <div
      className="w-full z-10 select-none text-lg font-medium text-left text-black mb-0 flex flex-col justify-center items-center bg-white border-[1px] border-t-0 border-gray-200 shadow"
      style={{ height: NAVBAR_HEIGHT }}
    >
      <div className="max-w-5xl w-full flex items-center px-4">
        <a className="font-bold text-2xl" href="/">
          10<sup>N</sup>
        </a>
        <div className="w-full"></div>
        {showStats && (
          <>
            <div className="flex gap-2 mr-4 items-center text-red-700 font-semibold">
              <FaFire className="text-lg text-red-500 mb-[1px]" />7
            </div>
            <div className="flex gap-2 items-center text-yellow-600 font-semibold">
              <FaStar className="text-xl text-yellow-400 mb-[1px]" />
              12
            </div>
          </>
        )}
        <div className="w-full"></div>

        <NavbarMenu />
      </div>
    </div>
  );
}
