const KNOWN_AGENCIES = ["PADI", "SSI", "RAID"] as const;

export const primaryAgency = (agency: string | null): string => {
  if (!agency) return "Unconfirmed";
  const match = KNOWN_AGENCIES.find((known) => agency.toUpperCase().includes(known));
  return match ?? "Other";
};
