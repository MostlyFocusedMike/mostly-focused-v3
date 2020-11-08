import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'

const Articles = () => {
  return <>
    <SEO title="Articles" />

    <h1>Articles</h1>

    <Link to="/">Go back to the homepage</Link>
  </>
}

export default Articles;