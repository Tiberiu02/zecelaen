import { TbDiscountCheckFilled } from "react-icons/tb";
import { CgMenuGridO } from "react-icons/cg";
import { FaStar, FaFire, FaFacebookF } from "react-icons/fa6";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { SubLogo } from "../../components/SubLogo";
import { Exercise } from "./Exercise";

export default function Home() {
  const progress = true;

  return (
    <main className="bg-math min-h-screen flex flex-col items-center">
      <h1 className="w-full text-lg font-medium text-left text-black mb-0 h-16 flex flex-col justify-center items-center bg-white border-[1px] border-t-0 border-gray-200 shadow">
        <div className="w-[60rem] flex items-center">
          <div className="font-bold text-2xl">
            10<sup>N</sup>
          </div>
          <div className="w-full"></div>
          <div className="flex gap-2 mr-8 items-center text-red-700 font-semibold">
            <FaFire className="text-lg text-red-500 mb-[1px]" />7
          </div>
          <div className="flex gap-2 items-center text-yellow-700 font-semibold">
            <FaStar className="text-xl text-yellow-500 mb-[1px]" />
            12
          </div>
          <div className="w-full"></div>

          <CgMenuGridO className="text-3xl shrink-0 opacity-40 hover:opacity-100 cursor-pointer duration-150" />
        </div>
      </h1>
      <div className="w-full text-lg font-medium text-left text-black mb-0 py-4 justify-center flex flex-col items-center bg-white border-[1px]  border-gray-200 shadow">
        <div className="flex flex-row items-center gap-4 w-[60rem]">
          <SubLogo seed={1201231} className="w-8 h-8" />
          <div className="flex mr-auto flex-col justify-between">
            <div className="text-xl font-normal text-center bg-anti-math">
              Evaluarea Națională
            </div>
            <div className="w-fit font-semibold text-sm opacity-40 bg-anti-math">
              23 iunie 2023
            </div>
          </div>
          {progress && (
            <TbDiscountCheckFilled className="text-green-500 text-4xl" />
          )}
        </div>
        <div className="w-[60rem] mt-8 text-sm flex items-center font-medium gap-8 text-black/60">
          <button className="flex gap-2 items-center rounded-lg hover:text-blue-500 duration-150 bg-anti-math">
            <HiDownload className=" " />
            Subiect
          </button>
          <button className="flex gap-2 items-center rounded-lg hover:text-blue-500 duration-150 bg-anti-math">
            <HiDownload className=" " />
            Barem
          </button>
          <div className="w-full"></div>
          <button className="flex gap-2 items-center rounded-lg hover:text-blue-500 duration-150 bg-anti-math">
            <FaWhatsapp className=" " />
            Share
          </button>
          <button className="flex gap-2 items-center rounded-lg hover:text-blue-500 duration-150 bg-anti-math">
            <FaFacebookF className="text-xs" />
            Share
          </button>
          <button className="flex gap-2 items-center rounded-lg hover:text-blue-500 duration-150 bg-anti-math">
            <FaFacebookMessenger className="text-xs" />
            Share
          </button>
        </div>
      </div>

      {/* <h1 className="text-base mt-12 font-semibold text-left text-black/40 px-2 py-1 bg-white rounded-md border-[1px] border-gray-200 shadow [font-family:KaTeX\_Main,Times_New_Roman,serif]">
              Subiectul I
            </h1> */}
      <h1 className="text-2xl mt-24 w-[60rem] text-left text-black [font-family:KaTeX\_Main,Times_New_Roman,serif]">
        <span className="bg-anti-math">Subiectul I</span>
      </h1>

      <Exercise
        index={1}
        description="Rezultatul calculului $15 - (3 + 4)$ este egal cu:"
        points={5}
        options={["3", "8", "16", "22"]}
      />

      <Exercise
        index={2}
        description="Știind că $\frac{x}{y} \not = \frac{5}{2}$, $y \not = 0$, rezultatul calculului $2x + 5y + 10$ este egal cu:"
        points={5}
        options={["0", "7", "10", "17"]}
      />

      <div className="flex flex-col gap-4 items-center">
        <div className="mb-4 mt-28 font-medium text-black/40 bg-anti-math flex items-center gap-1">
          <span className="text-2xl">©</span> 2023 ZeceLaEN.ro
        </div>
      </div>
    </main>
  );
}