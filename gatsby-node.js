const path = require("path");
const fs = require("fs");
const _ = require("lodash");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");

const postNodes = [];

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
    [];
    if (Object.prototype.hasOwnProperty.call(node.frontmatter, "path"))
      slug = `/${_.kebabCase(node.frontmatter.path)}`;

    if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
      const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
      if (!date.isValid)
        console.warn(`WARNING: Invalid date.`, node.frontmatter);

      createNodeField({
        node,
        name: "date",
        value: date.toISOString()
      });
    }
  }
  createNodeField({ node, name: "slug", value: slug });
  postNodes.push(node);
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
        }
      }
    }
  }
}
`;
const Page = path.resolve("src/templates/default-page.jsx");
const postPage = path.resolve("src/templates/post.jsx");
const workPage = path.resolve("src/templates/work.jsx");
const tagPage = path.resolve("src/templates/tag.jsx");
const categoryPage = path.resolve("src/templates/category.jsx");

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const response = await graphql(query);
  if (response.errors) throw new Error(response.errors);
  const { work, blog } = response.data;

  blog.edges.forEach(({ node }, index, arr) => {
    const nextSlug = index === 0 ? `` : arr[index - 1].node.frontmatter.path;
    const prevSlug =
      index === arr.length - 1 ? `` : arr[index + 1].node.frontmatter.path;
    const slug = node.frontmatter.path;
    createPage({
      path: `${slug}`,
      component: postPage,
      context: { slug, nextSlug, prevSlug, id: node.id }
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
      context: { slug, nextSlug, prevSlug, id: node.id }
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
  });
};
