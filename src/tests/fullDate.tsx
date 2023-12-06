export function fullDate(date: string) {
  const [day, month, year] = date.split(".");
  const months = [
    "ianuarie",
    "februarie",
    "martie",
    "aprilie",
    "mai",
    "iunie",
    "iulie",
    "august",
    "septembrie",
    "octombrie",
    "noiembrie",
    "decembrie",
  ];
  return `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
}
