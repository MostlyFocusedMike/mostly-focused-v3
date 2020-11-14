import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ArticleCard from "./ArticleCard";

const Recommendations = ({helpIds = []}) => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            slug
            helpId
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
`)

  // this is def gonna get slow as hell
  const articles  = data.allMdx.edges
    .filter(edge => helpIds.includes(edge.node.frontmatter.helpId))
    .map(edge => ({
      id: edge.node.id,
      frontmatter: edge.node.frontmatter,
    }));
    console.log('articles: ', articles);
  return (
    <ul id='recommendations'>
      {
        articles.map(article => {
          return <ArticleCard
           key={article.id}
           id={article.id}
           slug={article.frontmatter.slug}
           title={article.frontmatter.title}
           fluid={article.frontmatter.featuredImage.childImageSharp.fluid}
          />
        })
      }
    </ul>
  );
}

export default Recommendations;
