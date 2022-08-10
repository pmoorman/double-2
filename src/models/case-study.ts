export interface CaseStudyStats {
  title: string;
  value: string;
}

export interface CaseStudy {
  section_type: 1 | 2 | 3 | 4 | 5;
  section_body?: any;
  weight?: number;
  title: string;
  subtitle: string;
  hero_body: string;
  hero_image: any;
  image: any;
  image_url: string;
  logo: any;
  stats?: CaseStudyStats[];
  categories: string[];
  slug: string;
  quote?: {
    content: string;
    name: string;
    title: string;
  };
  embeddedImages: any[];
  featured_thumbnail?: any;
  featured?: boolean;
  show_on_homepage?: boolean;

  how_we_did_it: string;
  results: string;
  results_image: any;
  milestones?: { title: string; image: any; body: string }[];
}
