export interface CaseStudyStats {
  title: string;
  value: string;
}

export interface CaseStudy {
  // Common (both page and section)
  title: string;
  subtitle: string;
  excerpt: string;
  logo: any;
  weight?: number;
  has_single_page?: boolean;
  categories: string[];
  stats?: CaseStudyStats[];
  slug: string;

  // page
  hero_image: any;
  how_we_did_it: string;
  results: {
    body: string;
    image: any;
  };
  milestones?: { title: string; image: any; body: string }[];

  // section (on index page)
  embeddedImages: any[];
  section: {
    type: 1 | 2 | 3 | 4 | 5;
    image: any;
    image_url: string;
    on_homepage?: boolean;
    body?: any;
    hide_arrow?: boolean;
    quote?: {
      content: string;
      name: string;
      title: string;
    };
  };

  // Is featured?
  featured?: boolean;
  featured_thumbnail?: any;
}
