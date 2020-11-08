import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import './article-layout.css'
import Img from "gatsby-image"

const shortcodes = { Link } // Provide common components here that can be used in blogs without needing imports

export default function PageTemplate({ data: { mdx } }) {
  return (
    <div id="article-content">
      <h1 id='article-title'>{mdx.frontmatter.title}</h1>
      <div id='blue-line-angle'></div>
      <h2 id='article-subtitle'>{mdx.frontmatter.subtitle}</h2>
      <div id='featured-img'>
        <Img id='test' fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid} />
      </div>
      <div id="article-body">
        <MDXProvider  components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>

    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        subtitle
        tags
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
`