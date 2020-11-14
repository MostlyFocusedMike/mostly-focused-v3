import React from "react"
import { Link, graphql } from "gatsby"
import ArticleCard from "../components/ArticleCard";

const BlogIndex = ({ data }) => {
  const { allMdx: { edges: posts }, site: {siteMetadata} } = data;
  console.log('siteMetadata: ', siteMetadata);
  return (
    <div>
      <h1><span id="mostly">mostly</span><span id="focused">Focused</span></h1>
      <nav>
        <Link to='/articles'>Articles</Link>
        <Link to='/about'>About</Link>
        <Link to='/friends'>Friends</Link>
        <Link to='/social'>Social</Link>
      </nav>
      <h2>Featured Articles</h2>
      <ul>
        {posts.map(({ node: post }) => (
          <ArticleCard
           key={post.id}
           id={post.id}
           slug={post.frontmatter.slug}
           excerpt={post.excerpt}
           title={post.frontmatter.title}
           fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
          />
        ))}
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

