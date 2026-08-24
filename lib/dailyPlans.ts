import { createSupabaseClient } from "@/lib/supabase";

export type TodaysPlan = {
  id: string;
  schoolName: string;
  site: string;
  boatTime: string;
  spotsStatus: string;
};

type PlanRow = {
  id: string;
  site: string;
  boat_time: string;
  spots_status: string;
  schools: { name: string } | { name: string }[] | null;
};

const schoolName = (schools: PlanRow["schools"]): string => {
  if (!schools) return "Unknown school";
  return Array.isArray(schools) ? (schools[0]?.name ?? "Unknown school") : schools.name;
};

export const getTodaysPlans = async (): Promise<TodaysPlan[]> => {
  try {
    const supabase = createSupabaseClient();
    const today = new Date().toISOString().slice(0, 10);

    const { data, error } = await supabase
      .from("daily_plans")
      .select("id, site, boat_time, spots_status, schools(name)")
      .eq("plan_date", today)
      .order("boat_time");

    if (error) throw error;

    return (data as PlanRow[]).map((row) => ({
      id: row.id,
      schoolName: schoolName(row.schools),
      site: row.site,
      boatTime: row.boat_time,
      spotsStatus: row.spots_status,
    }));
  } catch (error) {
    console.error("getTodaysPlans failed, falling back to empty list:", error);
    return [];
  }
};
