import { FaBook, FaDiscord, FaUsers } from "react-icons/fa6";
import { FaExclamationCircle } from "react-icons/fa";

import React from "react";
import { Button } from "@/components/Button";
import { Metadata } from "next";
import { SimplePageLayout } from "@/layouts/SimplePageLayout";

export const metadata: Metadata = {
  title: "Server Discord Zece la EN",
  description:
    "Hai cu noi pe Discord să discutăm despre Evaluarea Națională sau să ne spui ce vrei să adăugăm pe Zece La EN",
};

export default async function Page() {
  return (
    <SimplePageLayout>
      <div className="text-3xl self-center font-semibold [text-wrap:balance] text-center">
        Hai cu noi pe Discord!
      </div>
      <div className="flex flex-col self-center gap-4 text-lg sm:text-xl">
        <div className="leading-8 space font-normal">
          <FaBook className="inline text-blue-500 mr-2 text-2xl" /> Noutăți și
          discuții despre Evaluarea Națională
        </div>
        <div className="leading-8 space font-normal">
          <FaExclamationCircle className="inline text-blue-500 mr-2 text-2xl" />{" "}
          Spune-ne ce vrei să adăugăm pe ZeceLaEN.ro
        </div>
        <div className="leading-8 space font-normal">
          <FaUsers className="inline text-blue-500 mr-2 text-2xl" /> Sunt
          bineveniți toți elevii, părinții și profesorii
        </div>
      </div>
      <a
        href="https://discord.gg/XkRrWKvwbt"
        target="_blank"
        className="self-center"
      >
        <Button className="text-[#5865F2] w-fit px-5 py-2 flex gap-2 items-center font-bold">
          <FaDiscord className="text-2xl" /> Discord
        </Button>
      </a>
    </SimplePageLayout>
  );
}
