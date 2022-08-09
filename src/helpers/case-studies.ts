import { CaseStudy } from "@app/models";

export const getCaseStudyCategories = (caseStudies: CaseStudy[]): string[] => {
  const categories = caseStudies.reduce((acc, curr) => {
    return [...acc, ...curr.categories];
  }, [] as string[]);

  return Array.from(new Set(categories));
};

export const filterCaseStudiesByCategory = (
  caseStudies: CaseStudy[],
  category: string
): CaseStudy[] => {
  if (!category) return caseStudies;
  return caseStudies.filter((caseStudy) =>
    caseStudy.categories.includes(category)
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
  return caseStudies.filter((c) => c.show_on_homepage);
};
