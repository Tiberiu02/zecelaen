import fs from "fs";
import { parseSubiect } from "./parser";

export const tests = [
  {
    name: "Simulare Națională",
    fullName: "Simulare Evaluarea Națională Matematică 2024",
    id: "2024_SIM_NAT",
    date: "06.02.2024",
  },
  {
    name: "Subiect Model",
    fullName: "Subiect model Evaluarea Națională Matematică 2024",
    id: "2024_MODEL",
    date: "01.11.2023",
  },
  {
    name: "Simulare Ilfov",
    fullName: "Simulare Ilfov Evaluarea Națională Matematică 2024",
    id: "2024_SIM_IF",
    date: "21.11.2023",
  },
  {
    name: "Simulare Maramureș",
    fullName: "Simulare Maramureș Evaluarea Națională Matematică 2024",
    id: "2024_SIM_MM",
    date: "13.12.2023",
  },
  {
    name: "Simulare Sibiu",
    fullName: "Simulare Sibiu Evaluarea Națională Matematică 2024",
    id: "2024_SIM_SB",
    date: "15.12.2023",
  },
  {
    name: "Evaluarea Națională",
    fullName: "Subiect Evaluarea Națională Matematică 2023",
    id: "2023_EN",
    date: "21.06.2023",
  },
  {
    name: "Subiect de Rezervă",
    fullName: "Subiect de rezervă Evaluarea Națională Matematică 2023",
    id: "2023_EN_REZERVA",
    date: "21.06.2023",
  },
  {
    name: "Simulare Națională",
    fullName: "Simulare Evaluarea Națională Matematică 2023",
    id: "2023_SIM_NAT",
    date: "21.03.2023",
  },
  {
    name: "Subiect Model",
    fullName: "Model Evaluarea Națională Matematică 2023",
    id: "2023_MODEL",
    date: "01.11.2022",
  },
  {
    name: "Simulare Constanța",
    fullName: "Simulare Constanța Evaluarea Națională Matematică 2023",
    id: "2023_SIM_CT",
    date: "28.02.2023",
  },
  {
    name: "Simulare Dolj",
    fullName: "Simulare Dolj Evaluarea Națională Matematică 2023",
    id: "2023_SIM_DJ",
    date: "07.02.2023",
    videos: [
      [
        "https://www.youtube.com/watch?v=Y9uCQbCRxDQ",
        "https://www.youtube.com/watch?v=hcEKa0uQzM4",
        "https://www.youtube.com/watch?v=pXMEw_y1UsA",
        "https://www.youtube.com/watch?v=pj41Rbbxa-o",
        "https://www.youtube.com/watch?v=haWbElpIdz4",
        "https://www.youtube.com/watch?v=8IihCgdbZn4",
      ],
      [
        "https://youtu.be/eAmgx28ef0Y",
        "https://youtu.be/Hyv0YAzlpXw",
        "https://youtu.be/PRMZCrcMEIA",
        "https://youtu.be/-rVnulzw-EI",
        "https://youtu.be/8Ug-pwxfpo8",
        "https://youtu.be/d58w6GXPHNk",
      ],
      [
        "https://youtu.be/dSzVNix_qGo",
        "https://youtu.be/GcRrvtlwgCc",
        "https://youtu.be/vT4WjAX6Ox0",
        "https://youtu.be/68bPh-hFKws",
        "https://youtu.be/-GMMzrmaXvI",
        "https://youtu.be/6unuuoaSIXk",
      ],
    ],
  },
  {
    name: "Simulare Ilfov",
    fullName: "Simulare Ilfov Evaluarea Națională Matematică 2023",
    id: "2023_SIM_IF",
    date: "30.01.2023",
  },
  {
    name: "Simulare Iași",
    fullName: "Simulare Iași Evaluarea Națională Matematică 2023",
    id: "2023_SIM_IS",
    date: "18.01.2023",
  },
  {
    name: "Simulare Brăila",
    fullName: "Simulare Brăila Evaluarea Națională Matematică 2023",
    id: "2023_SIM_BR",
    date: "17.01.2023",
  },
  {
    name: "Simulare Maramureș",
    fullName: "Simulare Maramureș Evaluarea Națională Matematică 2023",
    id: "2023_SIM_MM",
    date: "16.11.2022",
  },
  {
    name: "Simulare Giurgiu",
    fullName: "Simulare Giurgiu Evaluarea Națională Matematică 2023",
    id: "2023_SIM_GR",
    date: "20.02.2023",
    videos: [
      [
        "https://youtu.be/ZM2JKrscVDY",
        "https://youtu.be/mn1-xxwNgug",
        "https://youtu.be/xAIgrwbDpN4",
        "https://youtu.be/038IOYM665w",
        "https://youtu.be/z5EnE3LMlQ4",
        "https://youtu.be/iY-fVCfC3D8",
      ],
      [
        "https://youtu.be/I1CP289omnI",
        "https://youtu.be/aldJwwajdbE",
        "https://youtu.be/BhLvNKzmpSI",
        "https://youtu.be/Mq1DQGxyqSQ",
        "https://youtu.be/yorKrA3yHi4",
        "https://youtu.be/D2K6Vbyen50",
      ],
      [
        "https://youtu.be/YE2GgKgFVhg",
        "https://youtu.be/scplliaeXKQ",
        "https://youtu.be/j6RPXW8kF4A",
        "https://youtu.be/CDk_kE5tArA",
        "https://youtu.be/5NRHu1fi7og",
        "https://youtu.be/SyK_5U6lazw",
      ],
    ],
  },
] as {
  name: string;
  fullName: string;
  id: string;
  date: string;
  videos?: string[][];
}[];

export function getKey(name: string) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]/g, "-");
}

export const testsByYear = tests.reduce((acc, test) => {
  let [day, month, year] = test.date.split(".");
  if (parseInt(month) > 8) {
    year = (parseInt(year) + 1).toString();
  }
  if (!acc[year]) {
    acc[year] = [];
  }
  acc[year].push(test);
  return acc;
}, {} as Record<string, (typeof tests)[number][]>);

export const testsByKey = Object.fromEntries(
  tests.map((test) => [getKey(test.fullName), test])
);

export const testsById = Object.fromEntries(
  tests.map((test) => [test.id, test])
);

export function getTest(id: string) {
  const subiect = tests.find((s) => s.id === id);
  if (!subiect) throw new Error(`Subiectul ${id} nu există!`);
  const subiectPath = `subiecte/${id}/subiect.md`;
  const baremPath = `subiecte/${id}/barem.md`;
  const subiectMd = fs.readFileSync(subiectPath, "utf-8");
  const baremMd = fs.readFileSync(baremPath, "utf-8");

  return parseSubiect(subiectMd, baremMd);
}
