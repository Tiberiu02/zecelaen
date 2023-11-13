import { TbDiscountCheckFilled } from "react-icons/tb";
import { CgMenuGridO } from "react-icons/cg";
import { FaStar, FaFire, FaFacebookF } from "react-icons/fa6";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";
import { SubLogo } from "../../components/SubLogo";
import { Test1 } from "./Test1";

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
          <div className="flex gap-2 items-center text-yellow-600 font-semibold">
            <FaStar className="text-xl text-yellow-400 mb-[1px]" />
            35
          </div>
          <div className="w-full"></div>

          <CgMenuGridO className="text-3xl shrink-0 opacity-40 hover:opacity-100 cursor-pointer duration-150" />
        </div>
      </h1>

      <div className="w-[60rem] px-6 py-4 mt-8 rounded-2xl text-lg font-medium text-left text-black justify-center flex flex-col items-center bg-white border-[1px]  border-gray-200 shadow">
        <div className="flex flex-row items-center gap-4 w-full">
          <SubLogo seed={1201231} className="w-12 h-12" />
          <div className="flex mr-auto flex-col justify-between">
            <div className="text-xl font-medium text-center bg-anti-math">
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
        <div className="w-[calc(100%+1rem)] mt-8 text-base flex items-center font-medium gap-2 text-black/60">
          <button className="flex gap-2 items-center bg-white rounded-full border-2 border-gray-200 shadow p-3 hover:bg-gray-100 px-4 py-1 duration-150">
            <HiDownload className=" " />
            Subiect
          </button>
          <button className="flex gap-2 items-center bg-white rounded-full border-2 border-gray-200 shadow p-3 hover:bg-gray-100 px-4 py-1 duration-150">
            <HiDownload className=" " />
            Barem
          </button>
          <div className="w-full"></div>
          <button className="flex gap-2 items-center bg-white rounded-full border-2 border-gray-200 shadow p-3 hover:bg-gray-100 px-4 py-1 duration-150 text-green-500">
            <RiWhatsappFill className=" " />
            Share
          </button>
          <button className="flex gap-2 items-center bg-white rounded-full border-2 border-gray-200 shadow p-3 hover:bg-gray-100 px-4 py-1 duration-150 text-blue-800">
            <FaFacebookF className="text-xs" />
            Share
          </button>
          <button className="flex gap-2 items-center bg-white rounded-full border-2 border-gray-200 shadow p-3 hover:bg-gray-100 px-4 py-1 duration-150 text-blue-500">
            <FaFacebookMessenger className="text-xs" />
            Share
          </button>
        </div>
      </div>

      <div className="flex mt-16 gap-6 flex-col">
        <h1 className="text-base w-fit self-center font-semibold text-left text-black/40 px-2 py-1 bg-white rounded-md border-[1px] border-gray-200 shadow">
          Subiectul I
        </h1>
        <Test1 />
      </div>

      <div className="flex flex-col gap-4 items-center">
        <div className="mb-4 mt-28 font-medium text-black/40 bg-anti-math flex items-center gap-1">
          <span className="text-2xl">©</span> 2023 ZeceLaEN.ro
        </div>
      </div>
    </main>
  );
}
