export type AreaKey =
  | "Sairee Beach"
  | "Mae Haad"
  | "Chalok Baan Kao"
  | "Tanote Bay"
  | "Sai Daeng Bay"
  | "Shark Bay"
  | "Koh Tao";

export const AREA_ORDER: AreaKey[] = [
  "Sairee Beach",
  "Mae Haad",
  "Chalok Baan Kao",
  "Tanote Bay",
  "Sai Daeng Bay",
  "Shark Bay",
  "Koh Tao",
];

// Several schools have slightly different raw `area` strings for the same beach/bay
// (e.g. "Mae Haad, near Tukta Thai Food", "Main port" — Koh Tao's main pier is at Mae
// Haad — or "Chalok Baan Kao Bay"). This groups them under one canonical area for
// navigation/filtering while the card itself still shows the full raw string.
export const canonicalArea = (area: string): AreaKey => {
  const lower = area.toLowerCase();
  if (lower.includes("sairee")) return "Sairee Beach";
  if (lower.includes("mae haad") || lower.includes("main port")) return "Mae Haad";
  if (lower.includes("chalok")) return "Chalok Baan Kao";
  if (lower.includes("tanote")) return "Tanote Bay";
  if (lower.includes("sai daeng")) return "Sai Daeng Bay";
  if (lower.includes("shark bay")) return "Shark Bay";
  return "Koh Tao";
};

export const AREA_PHOTOS: Record<AreaKey, string> = {
  "Sairee Beach": "https://images.pexels.com/photos/4610202/pexels-photo-4610202.jpeg",
  "Mae Haad": "https://images.pexels.com/photos/17962891/pexels-photo-17962891.jpeg",
  "Chalok Baan Kao": "https://images.pexels.com/photos/28800349/pexels-photo-28800349.jpeg",
  "Tanote Bay": "https://images.pexels.com/photos/6181119/pexels-photo-6181119.jpeg",
  "Sai Daeng Bay": "https://images.pexels.com/photos/4833216/pexels-photo-4833216.jpeg",
  "Shark Bay": "https://images.pexels.com/photos/5135236/pexels-photo-5135236.jpeg",
  "Koh Tao": "https://images.pexels.com/photos/16156054/pexels-photo-16156054.jpeg",
};

export const AREA_BLURBS: Record<AreaKey, string> = {
  "Sairee Beach": "Koh Tao's longest beach — the busiest strip of schools, bars, and beginner-friendly shore access.",
  "Mae Haad": "The main pier — where most boats leave from, with easy access for day trips and check-in dives.",
  "Chalok Baan Kao": "A quieter southern bay, close to Chumphon Pinnacle and Southwest Pinnacle boat routes.",
  "Tanote Bay": "A sheltered east-coast bay, popular for shallow reef dives and snorkeling right off the beach.",
  "Sai Daeng Bay": "A small southern bay known for calm, clear water — good for open water training dives.",
  "Shark Bay": "Named for the blacktip reef sharks that patrol its shallows — a favorite easy shore dive.",
  "Koh Tao": "Schools without one specific home beach listed, or that operate across multiple sites on the island.",
};
