export type Course = {
  name: string;
  price: string;
};

export type SocialLinks = {
  instagram?: string;
  facebook?: string;
  tripadvisor?: string;
};

export type School = {
  id: string;
  name: string;
  agency: string | null;
  area: string;
  website: string;
  priceInfo: string | null;
  languages: string[] | null;
  groupSize: string | null;
  summary: string | null;
  courses: Course[] | null;
  specialties: string[] | null;
  contactPhone: string | null;
  contactEmail: string | null;
  address: string | null;
  openingHours: string | null;
  socialLinks: SocialLinks | null;
  createdAt: string;
};

export type DailyPlan = {
  id: string;
  schoolId: string;
  planDate: string;
  site: string;
  boatTime: string;
  spotsStatus: string;
  createdAt: string;
};
