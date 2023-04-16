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
  homepageweight?: number;
  has_single_page?: boolean;
  categories: string[];
  stats?: CaseStudyStats[];
  slug: string;

  // page
  hero_image: any;
  body_image: any;
  page_logo_image: any;
  how_we_did_it: string;
  pageSubtitle: string;
  results: {
    body: string;
    image: any;
  };
  process: {
    image: any;
    process_subtitle: string;
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
    quote?: {
      content: string;
      name: string;
      title: string;
    };
  };

  // thumbnail on homepage
  thumbnail?: {
    image: any;
  };

  // quote
  quote?: {
    content: string;
    name: string;
    title: string;
    subtitle: string;
    image?: any;
  };

  // Is featured?
  featured?: boolean;
  featured_thumbnail?: any;
  featured_title: string;
  featured_subtitle: string;
}
