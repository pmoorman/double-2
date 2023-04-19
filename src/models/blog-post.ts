export interface BlogPost {
  seoTitle: string;
  seoKeywords: string;
  seoDescription: string;
  title: string;
  subtitle: string;
  date: string;
  featured: boolean;
  excerpt: string;
  author: string;
  categories: string[];
  summary_items: string[];
  hero_image: any;
  thumbnail?: any;
  thumbnail_position?: string;
  slug: string;
}
