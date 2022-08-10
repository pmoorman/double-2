import { CreatePagesArgs, CreateSchemaCustomizationArgs } from "gatsby";
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
        node: { relativeDirectory: string; relativePath: string };
      }) => {
        const { relativeDirectory, relativePath } = entry.node;
        const slug = `${pathPrefix}/${relativeDirectory}`;
        const page = {
          path: `/${slug}`,
          component: component,
          context: { relativePath },
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
          relativePath: { glob: "**/*/page.mdx" }
          extension: { eq: "mdx" }
        }
      ) {
        edges {
          node {
            relativeDirectory
            relativePath
          }
        }
      }
      casestudies: allFile(
        filter: {
          sourceInstanceName: { eq: "case-studies" }
          relativePath: { glob: "**/*/page.mdx" }
          extension: { eq: "mdx" }
        }
      ) {
        edges {
          node {
            relativeDirectory
            relativePath
          }
        }
      }
      careers: allFile(
        filter: {
          sourceInstanceName: { eq: "careers" }
          relativePath: { glob: "**/*/page.mdx" }
          extension: { eq: "mdx" }
        }
      ) {
        edges {
          node {
            relativeDirectory
            relativePath
          }
        }
      }
    }
  `);

  const { blog, casestudies, careers } = data;
  create(blog, "blog", "src/templates/blog-post/index.tsx");
  create(casestudies, "case-studies", "src/templates/case-study/index.tsx");
  create(careers, "careers", "src/templates/career/index.tsx");
};
