import { twMerge } from "tailwind-merge";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { CgMenuGridO } from "react-icons/cg";
import { FaStar, FaFire } from "react-icons/fa6";
import { SubLogo } from "../components/SubLogo";

export default function Home() {
  const subs = [
    ["2024", [["Subiect model", "2024", 100]]],
    [
      "2023",
      [
        ["Evaluarea Națională", "21 iunie 2023", 100],
        ["Subiect de rezervă", "21 iunie 2023", 100],
        ["Simulare națională", "21 aprilie 2023", 100],
        ["Simulare Constanța", "28 februarie 2023"],
        ["Simulare Dolj", "28 februarie 2023", 100], // ? data
        ["Simulare Ilfov", "30 ianuarie 2023"],
        ["Simulare Brăila", "17 ianuarie 2023"],
        ["Simulare Iași", "17 ianuarie 2023", 100], // ? data
        ["Simulare Botoșani", "18 ianuarie 2023"],
        ["Simulare Huneadoara", "18 ianuarie 2023"],
        ["Subiect model", "2023"],
      ],
    ],
    [
      "2022",
      [
        ["Evaluarea Națională", "16 iunie 2022"],
        ["Subiect de rezervă", "16 iunie 2022"],
        ["Simulare națională", "5 aprilie 2022"],
        ["Subiect model", "2022"],
        ["Test de antrenament 1", "2022"],
        ["Test de antrenament 2", "2022"],
        ["Test de antrenament 3", "2022"],
        ["Test de antrenament 4", "2022"],
        ["Test de antrenament 5", "2022"],
        ["Test de antrenament 6", "2022"],
      ],
    ],
    [
      "2021",
      [
        ["Evaluarea Națională", "24 iunie 2021"],
        ["Subiect de rezervă", "24 iunie 2021"],
        ["Simulare națională", "3 martie 2021"],
        ["Sesiunea Specială", "6 iulie 2021"],
        ["Subiect model 1", "2021"],
        ["Subiect model 2", "2021"],
        ["Test de antrenament 1", "2021"],
        ["Test de antrenament 2", "2021"],
        ["Test de antrenament 3", "2021"],
        ["Test de antrenament 4", "2021"],
        ["Test de antrenament 5", "2021"],
        ["Test de antrenament 6", "2021"],
        ["Test de antrenament 7", "2021"],
        ["Test de antrenament 8", "2021"],
        ["Test de antrenament 9", "2021"],
        ["Test de antrenament 10", "2021"],
        ["Test de antrenament 11", "2021"],
        ["Test de antrenament 12", "2021"],
        ["Test de antrenament 13", "2021"],
        ["Test de antrenament 14", "2021"],
        ["Test de antrenament 15", "2021"],
      ],
    ],
  ] as const;
  return (
    <main className="bg-math min-h-screen flex flex-col items-center">
      <h1 className="w-full text-lg font-medium text-left text-black mb-0 h-16 flex flex-col justify-center items-center bg-white border-2 border-t-0 border-gray-200 shadow">
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
            12
          </div>
          <div className="w-full"></div>

          <CgMenuGridO className="text-3xl shrink-0 opacity-40 hover:opacity-100 cursor-pointer duration-150" />
        </div>
      </h1>
      <h1 className="w-full text-lg font-medium text-left text-black mb-0 h-16 justify-center flex flex-col items-center bg-white border-[1px]  border-gray-200 shadow">
        <div className="w-[60rem]">Subiecte Evaluarea Națională Matematică</div>
      </h1>

      <div className="flex flex-col gap-4 items-center">
        {subs.map(([byear, subs]) => (
          <>
            <h1 className="text-base mt-12 mb-2 font-semibold text-left text-black/40 px-2 py-1 bg-white rounded-md border-[1px] border-gray-200 shadow">
              {byear}
            </h1>
            <div className="grid grid-cols-[auto_auto] gap-4 [&>*:nth-child(even)]:translate-y-1/4">
              {subs.map(([name, year, progress], i) => (
                <a
                  key={i}
                  className={twMerge(
                    "relative group overflow-hidden w-[28rem] items-center bg-white rounded-full border-2 hover:bg-gray-100 border-gray-200 shadow flex flex-row px-6 py-4 gap-8 cursor-pointer duration-150"
                  )}
                  href={"/test"}
                >
                  <SubLogo
                    seed={i + parseInt(byear) * 101}
                    className="w-8 h-8"
                  />
                  <div className="flex mr-auto flex-col justify-between">
                    <div className="text-xl font-normal text-center">
                      {name}
                    </div>
                    <div className="w-fit font-semibold text-sm opacity-40">
                      {year}
                    </div>
                  </div>
                  {progress && (
                    <TbDiscountCheckFilled className="text-green-500 text-4xl" />
                  )}
                </a>
              ))}
            </div>
          </>
        ))}
        <div className="mb-4 mt-28 font-medium text-black/40 bg-anti-math flex items-center gap-1">
          <span className="text-2xl">©</span> 2023 ZeceLaEN.ro
        </div>
      </div>
      {/* <div className="absolute overflow-hidden bg-white max-w-md w-full items-center rounded-xl border-[1px] border-gray-200 shadow flex flex-row p-8 py-4 gap-8">
        <SubLogo />
        <div className="flex mr-auto flex-col justify-between">
        <div className="text-xl font-medium text-center">Subiect Oficial</div>
          <div className="w-fit font-bold text-xl">2023</div>
        </div>
      </div> */}
    </main>
  );
}
