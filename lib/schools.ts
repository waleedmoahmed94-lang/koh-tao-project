import { createSupabaseClient } from "@/lib/supabase";
import type { Course, School, SocialLinks } from "@/types";

type SchoolRow = {
  id: string;
  name: string;
  agency: string | null;
  area: string;
  website: string;
  price_info: string | null;
  languages: string[] | null;
  group_size: string | null;
  summary: string | null;
  courses: Course[] | null;
  specialties: string[] | null;
  contact_phone: string | null;
  contact_email: string | null;
  address: string | null;
  opening_hours: string | null;
  social_links: SocialLinks | null;
  created_at: string;
};

const SELECT_COLUMNS =
  "id, name, agency, area, website, price_info, languages, group_size, summary, courses, specialties, contact_phone, contact_email, address, opening_hours, social_links, created_at";

const toSchool = (row: SchoolRow): School => ({
  id: row.id,
  name: row.name,
  agency: row.agency,
  area: row.area,
  website: row.website,
  priceInfo: row.price_info,
  languages: row.languages,
  groupSize: row.group_size,
  summary: row.summary,
  courses: row.courses,
  specialties: row.specialties,
  contactPhone: row.contact_phone,
  contactEmail: row.contact_email,
  address: row.address,
  openingHours: row.opening_hours,
  socialLinks: row.social_links,
  createdAt: row.created_at,
});

export const getSchools = async (): Promise<School[]> => {
  try {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase.from("schools").select(SELECT_COLUMNS).order("name");

    if (error) throw error;
    return (data as SchoolRow[]).map(toSchool);
  } catch (error) {
    console.error("getSchools failed, falling back to empty list:", error);
    return [];
  }
};

export const getSchool = async (id: string): Promise<School | null> => {
  const supabase = createSupabaseClient();
  const { data, error } = await supabase
    .from("schools")
    .select(SELECT_COLUMNS)
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;
  return data ? toSchool(data as SchoolRow) : null;
};
