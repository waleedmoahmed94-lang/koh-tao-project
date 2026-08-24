// Best-effort numeric extraction from freeform price strings like
// "~11,000 THB / Open Water course" or "5,970-19,900 THB (varies by season)".
// Used only for sorting — the raw string is always what's displayed.
export const extractMinPrice = (priceInfo: string | null): number | null => {
  if (!priceInfo) return null;
  const matches = priceInfo.match(/\d[\d,]*/g);
  if (!matches) return null;
  // Only treat comma-grouped or 4+ digit tokens as currency figures — filters out
  // incidental numbers like "3-day", "1 person", "4 divers" that aren't prices.
  const numbers = matches
    .filter((m) => m.includes(",") || m.replace(/,/g, "").length >= 4)
    .map((m) => parseInt(m.replace(/,/g, ""), 10))
    .filter((n) => !Number.isNaN(n));
  if (numbers.length === 0) return null;
  return Math.min(...numbers);
};
