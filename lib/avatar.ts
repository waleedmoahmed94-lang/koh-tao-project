const PALETTE: [string, string][] = [
  ["#0F7A82", "#0B5459"],
  ["#C89B3C", "#8F6C22"],
  ["#C1552E", "#8F3D20"],
  ["#4A5C61", "#2E3B3E"],
];

export const initials = (name: string): string =>
  name
    .replace(/['’]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");

export const avatarColors = (name: string): [string, string] => {
  const hash = name.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return PALETTE[hash % PALETTE.length];
};
