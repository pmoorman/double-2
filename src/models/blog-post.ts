export interface BlogPost {
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
  slug: string;
}
