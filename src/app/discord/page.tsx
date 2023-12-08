import {
  FaBook,
  FaCheck,
  FaDiscord,
  FaFacebookF,
  FaListCheck,
  FaUsers,
} from "react-icons/fa6";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaFacebookMessenger,
} from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";
import { SubLogo } from "../../components/SubLogo";

import React from "react";
import { testsByKey } from "@/tests/tests";
import { NavBar } from "@/components/NavBar";
import { RoundedRectangleProgressBar } from "../../components/RoundedRectangleProgressBar";
import { fullDate } from "../../tests/fullDate";
import { Button } from "@/components/Button";
import { ShareButtons } from "@/components/ShareButtons";

export default async function Page() {
  return (
    <main className="bg-math min-h-screen flex flex-col items-center">
      <NavBar />

      <div className="flex flex-col items-center px-4 w-full max-w-5xl">
        <div className="px-8 py-8 mt-8 gap-4 rounded-2xl text-lg font-medium text-left text-black justify-center flex flex-col bg-white border-[1px]  border-gray-200 shadow">
          <div className="text-3xl self-center font-semibold mx-4 mb-8 [text-wrap:balance] text-center">
            Hai cu noi pe Discord!
          </div>
          <div className="flex flex-col self-center gap-4">
            <div className="text-xl leading-8 space font-normal mx-4">
              <FaBook className="inline text-blue-500 mr-2 text-2xl" /> Noutăți
              și discuții despre Evaluarea Națională
            </div>
            <div className="text-xl leading-8 space font-normal mx-4">
              <FaExclamationCircle className="inline text-blue-500 mr-2 text-2xl" />{" "}
              Spune-ne ce să mai adăugăm pe ZeceLaEN.ro
            </div>
            <div className="text-xl leading-8 space font-normal mx-4">
              <FaUsers className="inline text-blue-500 mr-2 text-2xl" /> Sunt
              bineveniți toți elevii, părinții și profesorii
            </div>
          </div>
          <a
            href="https://discord.gg/XkRrWKvwbt"
            target="_blank"
            className="self-center"
          >
            <Button className="text-[#5865F2] w-fit px-5 py-2 flex gap-2 mt-8 items-center font-bold">
              <FaDiscord className="text-2xl" /> Discord
            </Button>
          </a>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <div className="mb-4 mt-28 font-medium text-black/40 bg-anti-math flex items-center gap-1">
            <span className="text-2xl">©</span> 2023 ZeceLaEN.ro
          </div>
        </div>
      </div>
    </main>
  );
}
