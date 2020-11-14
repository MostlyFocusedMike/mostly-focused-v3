import React from "react"
import { Link } from 'gatsby'
import Img from "gatsby-image"


const ArticleCard = ({id, slug, title, fluid, excerpt, children}) => {
  console.log('id: ', id);
  console.log('slug: ', slug);
  console.log('title: ', title);
  console.log('fluid: ', fluid);
  console.log('excerpt: ', excerpt);
  return (
    <li key={id}>
      <Link to={slug}>
        <h2>{title}</h2>
        <Img fluid={fluid} />
      </Link>
      <p>{excerpt}</p>
    </li>
  )
}

export default ArticleCard;