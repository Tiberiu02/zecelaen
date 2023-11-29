import fs from "fs";
import { parseSubiect } from "./parser";

export const tests = [
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
] as const;

export function getKey(name: string) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]/g, "-");
}

export const testsByYear = tests.reduce((acc, test) => {
  const date = test.date.split(".")[2];
  if (!acc[date]) {
    acc[date] = [];
  }
  acc[date].push(test);
  return acc;
}, {} as Record<string, (typeof tests)[number][]>);

export const testsByKey = Object.fromEntries(
  tests.map((test) => [getKey(test.fullName), test])
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
