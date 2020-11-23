import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import Recommendations from './Recommendations';
import './article-layout.css'

const shortcodes = { Link, Recommendations } // Provide common components here that can be used in blogs without needing imports

export default function PageTemplate({ data: { mdx } }) {
  console.log('mdx.tableOfContents: ', mdx.tableOfContents);
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
      tableOfContents
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