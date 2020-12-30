import React from "react"
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const ArticleCardsBig = ({ posts }) => {
  return (
    <ul id='article-cards-big'>
    {
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
                    <h3 className='article-card-big-tag-label'>Tags:</h3>
                    <ul className="article-card-big-tags">
                      {
                        tags && tags.map((tag, idx) => (
                          <li
                            key={idx}
                            className='article-card-big-tag'
                          >{tag}
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>

              </div>
              <div className="lower-half">
                <p className="article-card-big-description">{description}</p>
              </div>
            </li>
        )
      })
    }
    </ul>
  )
}

export default ArticleCardsBig