import { CaseStudy } from "@app/models";

export const getCaseStudyCategories = (caseStudies: CaseStudy[]): string[] => {
  const categories = caseStudies.reduce((acc, curr) => {
    return [...acc, ...(curr.grid_item?.tags || [])];
  }, [] as string[]);
  return Array.from(new Set(categories));
};

export const filterCaseStudiesByCategories = (
  caseStudies: CaseStudy[],
  categories: string[]
): CaseStudy[] => {
  if (!categories.length) return caseStudies;
  return caseStudies.filter((caseStudy) =>
    caseStudy.grid_item?.tags?.some((t) => categories.includes(t))
  );
};

export const getFeaturedCaseStudies = (
  caseStudies: CaseStudy[]
): CaseStudy[] => {
  return caseStudies.filter((c) => c.featured);
};

export const getHomepageCaseStudies = (
  caseStudies: CaseStudy[]
): CaseStudy[] => {
  return caseStudies.filter((c) => c.section.on_homepage);
};
