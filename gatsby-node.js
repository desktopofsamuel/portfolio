const path = require("path");
const fs = require("fs");
const _ = require("lodash");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  let slug;

  if (node.internal.type === "Mdx") {
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "path")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.path)}`;
    } else if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    }
    createNodeField({ node, name: "slug", value: slug });
    if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
      const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
      if (!date.isValid)
        console.warn(`WARNING: Invalid date.`, node.frontmatter);

      createNodeField({
        node,
        name: "date",
        value: date.toISOString(),
      });
    }
  }
};

const query = ` 
{
  work: allMdx(filter: { fileAbsolutePath: {regex: "/work/"}})
  {
    edges {
      node {
        id
        frontmatter {
          path
          date
        }
        }
      }
    }
  blog: allMdx(filter: { fileAbsolutePath: {regex: "/blog/"}})
  {
    edges {
      node {
        id
        frontmatter {
          path
          date
          tags
          category
        }
      }
    }
  }
  photo: allMdx(filter: { fileAbsolutePath: {regex: "/photo/"}})
  {
    edges {
      node {
        id
        frontmatter {
          path
          date
        }
      }
    }
  }
}
`;
const postPage = path.resolve("src/templates/blog-template.jsx");
const workPage = path.resolve("src/templates/work.jsx");
const photoPage = path.resolve("src/templates/photo.jsx");
const tagPage = path.resolve("src/templates/tag.jsx");
const categoryPage = path.resolve("src/templates/category.jsx");

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const response = await graphql(query);
  if (response.errors) throw new Error(response.errors);
  const { work, blog, photo } = response.data;

  photo.edges.forEach(({ node }, index, arr) => {
    const nextSlug = index === 0 ? `` : arr[index - 1].node.frontmatter.path;
    const prevSlug =
      index === arr.length - 1 ? `` : arr[index + 1].node.frontmatter.path;
    const slug = node.frontmatter.path;
    createPage({
      path: `/photo${slug}`,
      component: photoPage,
      context: {
        slug,
        nextSlug,
        prevSlug,
        id: node.id,
      },
    });
  });

  blog.edges.forEach(({ node }, index, arr) => {
    const nextSlug = index === 0 ? `` : arr[index - 1].node.frontmatter.path;
    const prevSlug =
      index === arr.length - 1 ? `` : arr[index + 1].node.frontmatter.path;
    const slug = node.frontmatter.path;
    createPage({
      path: `${slug}`,
      component: postPage,
      context: {
        slug,
        nextSlug,
        prevSlug,
        id: node.id,
        category: node.frontmatter.category,
        tag: node.frontmatter.tags,
      },
    });

    const tagSet = new Set();
    const categorySet = new Set();
    blog.edges.forEach((edge) => {
      if (edge.node.frontmatter.tags) {
        edge.node.frontmatter.tags.forEach((tag) => {
          tagSet.add(tag);
        });
      }

      if (edge.node.frontmatter.category) {
        categorySet.add(edge.node.frontmatter.category);
      }

      const tagList = Array.from(tagSet);
      tagList.forEach((tag) => {
        createPage({
          path: `/tags/${_.kebabCase(tag)}/`,
          component: tagPage,
          context: {
            tag,
          },
        });
      });

      const categoryList = Array.from(categorySet);
      categoryList.forEach((category) => {
        createPage({
          path: `/categories/${_.kebabCase(category)}/`,
          component: categoryPage,
          context: {
            category,
          },
        });
      });
    });
  });

  work.edges.forEach(({ node }, index, arr) => {
    const nextSlug = index === 0 ? `` : arr[index - 1].node.frontmatter.path;
    const prevSlug =
      index === arr.length - 1 ? `` : arr[index + 1].node.frontmatter.path;
    const slug = node.frontmatter.path;
    createPage({
      path: `/work${slug}`,
      component: workPage,
      context: {
        slug,
        nextSlug,
        prevSlug,
        id: node.id,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};
