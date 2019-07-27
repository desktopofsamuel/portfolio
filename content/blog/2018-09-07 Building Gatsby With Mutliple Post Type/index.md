---
path: "/building-gatsby-with-multiple-post-type"
date: "2018-09-17"
title: "Building Gatsby With Multiple Post Type"
category: "Work In Progress"
tags: 
- "gatsby"
- "react"
- "portfolio"
cover: "./Gatsby-Multiple-Post-Type.png"
tldr: "I'm sharing my way of setting up multiple post types in GatsbyJS. It works for portfolio setup with blog + projects"

---

#####Read this UPDATED [article](./gatsby-website-with-multiple-post-types) if you are using Gatsby v2.0. This article was written when I was using Gatsby v1.0.

As a designer with no prior experience in React, starting Gatsby with a starter template is the easiest way. After that, adding bits and pieces by following online tutorials and Github threads are the parts that you learn, as you understand how to adapt others' code and review each expression and argument means whenever you encounter errors.

##Use Case

I'm setting up my Gatsby to support multiple post types, as I want to display my blog articles and projects at the same time. It is useful for personal / agency site setup. Since all posts will be rendered by markdown files, they will be saved in different source folders for simplicity.   

##What To Do

Let me explain the whole process verbally since there are only a few tutorials online. For the record, this assumed you have an existing Gatsby blog already.  

Things we need to do:

1. Create a new "projects" folder and post under source folder
2. Edit `gatsby-config.js` to include new source folder in `gatsby-source-filesystem` plugin
3. Duplicate `blog-post.js` to create `project-post.js` template
4. Edit `gatsby-node.js` CreatePage API to adopt a separate template for different post type. 
5. Create Project Main page to query project post
6. Edit Blog Main page not to query project post
7. Create Tag & Category Page for Project

##1. Create New Projects Folder
My source folder setup is like this:
```
src
——blogs
    —— Blog Post #1
		——index.md
		——photo1.jpg
——projects
	——Project #1
		——index.md
		——photo2.jpg 	
——templates
		——blog-post.js
		——project-post.js
```
All blog posts and project posts will be grouped in separated folders, with individual project post named `index.md`, together with a feature photo. In this scenario, all project files will require a feature photo since it will be displayed on Project Main page. 

For frontmatter of the markdown, I have added a new field called "Posttype", those specified as `posttype: project` will be queried later in project main page. Those without will be recognized as a blog post.

My markdown frontmatter setup is:

```markdown
path: "/project-1"
date: "2018-09-07"
title: "Project 1"
tags: ["app", "design"]
posttype: "project"
image: "./project-1.png"
```


##2. Edit Gatsby-Config.js
We will need to edit gatsby-config.js in order to let Gatsby know where to look when creating a new post page. 
```javascript
{
  resolve: 'gatsby-source-filesystem',
  options: {
    path: `${__dirname}/src/projects`,
    name: 'project'
  }
},
```

##3. Create Project Post Template
Then, we will need to create a Project Post template `project-post.js`, putting in my template (src/templates) folder together with `blog-post.js`, so later `gatsby-node.js` can reference to when creating project pages.
 
Let's copy everything in `blog-post.js` and paste it in Project Post. This will ensure everything works accordingly. However, you will only need to rename the GraphQL query name, since all GraphQL query need to have unique name. I changed from "BlogPostByPath" to "ProjectPostByPath". We can come back and edit it later. 

##4. Edit Gatsby-Node.js
**Being a static site generator, Gatsby-Node.js handles how your site is generated.** Personally speaking, it is a rather confusing part of the whole Gatsby development process.

CreatePages should be in the file already. 
```javascript
exports.createPages = ({boundActionCreators, graphql}) => {
const { createPage } = boundActionCreators
```

We will need to import the `project-post.js`right after the blog template. 

```javascript
const postTemplate = path.resolve('src/templates/blog-post.js');
const projectTemplate = path.resolve('src/templates/project-post.js');
```
        
After that, we will use our newly created frontmatter field, "posttype" to filter all our markdown pages. Because a majority of markdown pages will be blog page, if / else argument is used here. Unless specified post "posttype" is equal to "project" (or any other posttype to be included in the future), or else Gatsby will recognise the post as a blog post.

Here's my `gatsby-node.js` file:

```javascript
result.data.allMarkdownRemark.edges.forEach(edge => {
    if (edge.node.frontmatter.posttype === 'project') {
        createPage({
            path: edge.node.frontmatter.path,
            component: projectTemplate,
            context: {}
        });
    }   
    else {
        createPage({
            path: edge.node.frontmatter.path,
            component: postTemplate,
            context: {
            },
        })
    }
})    
```

Remember you will need starting the site again with the command `gatsby-develop` at the terminal since hot reload does not cover the gatsby-node.js page.

If you have successfully `gatsby-develop` the site, let's go to the project post path to make sure it is working. You should be seeing a blog post with your project content. Now you may adjust the project post template to suit your needs.


Right now this method is not creating a prefix path in front of the project post. So there might be a chance that project post shares the same path with a blog post. I'm still looking for a solution, feel free to suggest any. 

##5. Create Project Main Page

Now the individual post is done, let's work on a Project Main page that will query all project post. 

First, all the standards:
```javascript
import React from 'react'
import Link from 'gatsby-link'

const ProjectPage = ({data}) => {
    {data.allMarkdownRemark.edges.map(post => (
        <div key={ post.node.id }>
                <Img sizes={post.node.frontmatter.image.childImageSharp.sizes} />
                <Link to={post.node.frontmatter.path} >
                    <h2>{post.node.frontmatter.title}</h2>
                </Link>
                <p>{post.node.excerpt}</p>
        <div/>>

return (
)}
export const pageQuery = graphql`
```

Then we will add our GraphQL query at the end, notice I have filtered using the frontmatter, only those markdown files with assigned "project" as a post type will display. 

```graphql
query ProjectIndex {
  allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}, 
      filter: {frontmatter: {posttype: {eq: "project"}}}
    ){
    edges {
      node {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          path
          title
          date
          tags
          image {
            childImageSharp {
              sizes(maxWidth: 1140) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
              }
            }
          }
        }
      }
    }
  }
}
```

Remember to add `export default ProjectPage`

##6. Edit Blog Main

Then if you go to Blog Main page, you would still see a mix of blog posts and projects. That is because you will need to filter the GraphQL as well. 

Because we use if/else function in `gatsby-node.js`, stating all post without specifying posttype will be a blog post. We cannot query this page using frontmatter's post type,  we will use the filter function base on the Markdown's path.
  
```graphql
allMarkdownRemark (
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: {fileAbsolutePath: {regex: "\/blogs/"}}
    )
```

##7. Creating Tag & Category Page

Last but not least, we'll need to double check other components will not mix up with different post type. This is very dependable on how do you want different content type to work. In my case, I would like to separate the taxonomy between blog and portfolio. Therefore, I use different frontmatter for different post type. 

I use tag for blog and category for portfolio, Tag page would be a collection of articles that I have written regarding the certain topic, while Category page would be my field of work. To set this up, I have referenced [Gatsby Material Starter](https://github.com/Vagr9K/gatsby-material-starter/blob/master/gatsby-node.js). It allows us to create Tag & Category page as long as the frontmatter is in an array format. 
```markdown
category: [ "UI/UX Design", "Brand Design" ]
```
In your `gatsby-node.js` after resolving the GraphQL. Create tag set and category set to create page for each tag and category.

```javascript
//gatsby-node.js
const tagSet = new Set();
      const categorySet = new Set();
      result.data.allMarkdownRemark.edges.forEach(edge => {
        if (edge.node.frontmatter.tags) {
          edge.node.frontmatter.tags.forEach(tag => {
            tagSet.add(tag);
          });
        }

        {if (edge.node.frontmatter.category) {
          edge.node.frontmatter.category.forEach(category => {
            categorySet.add(category);
          });
        }
      }
        
      const tagList = Array.from(tagSet);
      tagList.forEach(tag => {
        createPage({
          path: `/tags/${_.kebabCase(tag)}/`,
          component: tagPage,
          context: {
            tag
          }
        });
      });
      
      const categoryList = Array.from(categorySet);
      categoryList.forEach(category => {
        createPage({
          path: `/categories/${_.kebabCase(category)}/`,
          component: categoryPage,
          context: {
            category
          }
        });
      });
```

In project template page, if you want to add a hyperlink to the category page, you can map the categories after query GraphQL. If you copied everything from `blog-post.js` , remember to change tags to category in GraphQL query. I used kebabCase to process category text into hyperlink friendly text. 

```javascript
//project-post.js
{post.frontmatter.category.map(((category, index) => {
return (
  <span key={index}>
    <Link to={`/categories/${kebabCase(category)}`}>
      <small>{category}</small>
    </Link>
  </span>
)
}))}
```

This should wrap up everything you need in order to create multiple post type in Gatsby. If you encountered any problems in setting it up. Make sure you:  

1. Restart localhost server every time if you have edited the `gatsby-node.js`
2. Test it step by step to eliminate any cause of error. 

For designers who are looking forward to build your first Gatsby site, I recommend look for the functionalities offered by starter template instead of style and layout. This will save so much time. Changing CSS and moving around different React component is much easier than figuring how node.js work. 

Feel free to share your ways of creating your own personal site using Gatsby. If you have a better solution or encountered any problems, I would love to know the case.






