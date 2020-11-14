import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'


const ArticleCard = ({ id, slug, title, fluid }) => {
  return (
    <li className='article-card' key={id}>
      <Link to={slug}>
        <Img
         className='article-card-img'
         fluid={fluid}
        />
        <h2>{title}</h2>
      </Link>
    </li>
  )
}

export default ArticleCard;