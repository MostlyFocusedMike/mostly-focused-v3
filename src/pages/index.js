import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

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
          <li key={post.id}>
            <Link to={post.frontmatter.slug}>
              <h2>{post.frontmatter.title}</h2>
              <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
            </Link>
            <p>{post.excerpt}</p>
          </li>
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

