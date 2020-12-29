import React from "react"
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const ArticleCardsBig = ({ posts }) => {
  return (
    posts.map(({ node: post }) => {
        const {
          id,
          frontmatter: {
            title,
            subtitle,
            description,
            tags,
            slug,
            featuredImage: {childImageSharp: {fluid }}
          },
        } = post;
        return (
          <ul id='article-cards-big'>
            <li className='article-card-big' key={id}>
              <div className='top-half'>

                <div className='top-left' >
                  <Link to={slug}>
                    <Img
                      className='article-card-big-img'
                      fluid={fluid}
                    />
                  </Link>
                </div>

                <div className='top-right'>
                  <Link to={slug}>
                    <div className='link-text'>
                      <h1>{title}</h1>
                      <h2>{subtitle}</h2>
                    </div>
                  </Link>
                  <div className="article-card-big-tags-holder">
                    <h3>Tags:</h3>
                    <ul className="article-card-big-tags">
                      {
                        tags && tags.map((tag, idx )=> <li key={idx}>{tag}</li>)
                      }
                    </ul>
                  </div>
                  <hr />
                </div>

              </div>

              <p classname="article-card-big-description">{description}</p>
            </li>
          </ul>
        )
    })
  )
}

export default ArticleCardsBig