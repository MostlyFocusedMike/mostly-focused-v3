import React from "react"
import { graphql } from "gatsby"
import ArticleCards from "../components/ArticleCards";
import ArticleCardsBig from "../components/ArticleCardsBig";

const BlogIndex = ({ data }) => {
  const { allMdx: { edges: posts }, site: { siteMetadata } } = data;
  console.log('siteMetadata: ', siteMetadata);
  return (
    <div>
      <div id='main-logo'>
        <h1><span id="mostly">mostly</span><span id="focused">FOCUSED</span></h1>
      </div>

      <div id="featured-articles-section">
        <h2>Featured Articles</h2>
        <ul id='featured-articles'>
          <ArticleCards posts={posts} />
        </ul>
      </div>

      <div id="all-articles-section">
        <h2>Search Articles</h2>
        <p>This would be the articles in chron order and only showing the selected tag</p>
        <p>TODO: make the full screen card with subtitle and tags</p>
        <ArticleCardsBig posts={posts} />
      </div>

      <div id="about-section">
        <h2>About</h2>
        <p>This would be a little blurb about me and all the links to my stuff</p>
        <a href="https://mostlyfocusedmike.medium.com" target="_blank" rel="noopener noreferrer">My Medium Page</a>
        <a href="https://www.linkedin.com/in/michael-cronin-2781174b/" target="_blank" rel="noopener noreferrer">My LinkedIn Page</a>
        <a href="https://github.com/mostlyFocusedMike" target="_blank" rel="noopener noreferrer">My GitHub </a>
        <a href="https://twitter.com/MostlyFocused" target="_blank" rel="noopener noreferrer">My Twitter </a>
      </div>

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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            helpId
            title
            subtitle
            description
            tags
            date
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

