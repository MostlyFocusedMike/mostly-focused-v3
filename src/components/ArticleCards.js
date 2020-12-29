import React from "react"
import ArticleCard from "./ArticleCard";

const ArticleCards = ({ posts }) => {
  return (
    posts.map(({ node: post }) => (
      <ArticleCard
        key={post.id}
        id={post.id}
        slug={post.frontmatter.slug}
        title={post.frontmatter.title}
        fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
      />
    ))
  )
}

export default ArticleCards