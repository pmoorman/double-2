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

  const { data } = await graphql<any>(`
    {
      items: allFile(
        filter: {
          sourceInstanceName: { eq: "content" }
          relativePath: { glob: "**/*/index.mdx" }
          extension: { eq: "mdx" }
        }
      ) {
        edges {
          node {
            relativeDirectory
          }
        }
      }
    }
  `);

  const templates: any = {
    blog: path.resolve("src/templates/blog-post/index.tsx"),
    careers: path.resolve("src/templates/career/index.tsx"),
    "case-studies": path.resolve("src/templates/case-study/index.tsx"),
  };

  data.items.edges.forEach(
    (entry: { node: { name: string; relativeDirectory: string } }) => {
      const { relativeDirectory } = entry.node;
      const slug = relativeDirectory;
      const [kind] = relativeDirectory.split("/");
      const template = templates[kind];
      if (!template) return;
      const page = {
        path: `/${slug}`,
        component: template,
        context: { slug: `${slug}/` },
      };
      createPage(page);
    }
  );
};
