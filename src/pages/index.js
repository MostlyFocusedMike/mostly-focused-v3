import React from "react"
import { Link, graphql } from "gatsby"
import ArticleCards from "../components/ArticleCards";

const BlogIndex = ({ data }) => {
  const { allMdx: { edges: posts }, site: { siteMetadata } } = data;
  console.log('siteMetadata: ', siteMetadata);
  return (
    <div>
      <h1><span id="mostly">mostly</span><span id="focused">Focused</span></h1>
      <h2>Featured Articles</h2>
      <ul id='featured-articles-main'>
        <ArticleCards posts={posts} />
      </ul>
    </div>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            slug
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default BlogIndex

