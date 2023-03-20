import { CreatePagesArgs, CreateSchemaCustomizationArgs, CreateWebpackConfigArgs } from "gatsby";
import path from "path";

exports.createSchemaCustomization = ({
  actions,
}: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions;

  createTypes(`
    type Frontmatter @dontInfer {
      embeddedImages: [File] @fileByRelativePath
    }
  `);
};

export const createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions;

  // helper
  const create = (data: any, pathPrefix: string, template: string) => {
    const component = path.resolve(template);
    data.edges.forEach(
      (entry: {
        node: {
          relativeDirectory: string;
          relativePath: string;
          childMdx: any;
        };
      }) => {
        const { relativeDirectory, relativePath, childMdx } = entry.node;
        const slug = `${pathPrefix}/${relativeDirectory}`;
        const page = {
          path: `/${slug}`,
          component: component,
          context: {
            relativePath,
            isArticle: true,
            title: childMdx.frontmatter.seo_title,
            description: childMdx.frontmatter.seo_description,
          },
        };
        createPage(page);
      }
    );
  };

  const { data } = await graphql<any>(`
    {
      blog: allFile(
        filter: {
          sourceInstanceName: { eq: "blog" }
          relativePath: { glob: "**/*/index.mdx" }
          extension: { eq: "mdx" }
        }
      ) {
        edges {
          node {
            relativeDirectory
            relativePath
            childMdx {
              frontmatter {
                seo_title
                seo_description
              }
            }
          }
        }
      }
      casestudies: allFile(
        filter: {
          sourceInstanceName: { eq: "case-studies" }
          relativePath: { glob: "**/*/index.mdx" }
          extension: { eq: "mdx" }
          childMdx: { frontmatter: { has_single_page: { eq: true } } }
        }
      ) {
        edges {
          node {
            relativeDirectory
            relativePath
            childMdx {
              frontmatter {
                seo_title
                seo_description
                has_single_page
              }
            }
          }
        }
      }
      careers: allFile(
        filter: {
          sourceInstanceName: { eq: "careers" }
          relativePath: { glob: "**/*/index.mdx" }
          extension: { eq: "mdx" }
          childMdx: { frontmatter: { draft: { ne: true } } }
        }
      ) {
        edges {
          node {
            relativeDirectory
            relativePath
            childMdx {
              frontmatter {
                seo_title
                seo_description
              }
            }
          }
        }
      }
      legal: allFile(
        filter: {
          sourceInstanceName: { eq: "legal" }
          relativePath: { glob: "**/*/index.mdx" }
          extension: { eq: "mdx" }
        }
      ) {
        edges {
          node {
            relativeDirectory
            relativePath
            childMdx {
              frontmatter {
                seo_title
                seo_description
              }
            }
          }
        }
      }
    }
  `);

  const { blog, casestudies, careers, legal } = data;
  create(blog, "blog", "src/templates/blog-post/index.tsx");
  create(casestudies, "case-studies", "src/templates/case-study/index.tsx");
  create(careers, "careers", "src/templates/career/index.tsx");
  create(legal, "legal", "src/templates/legal/index.tsx");
};
