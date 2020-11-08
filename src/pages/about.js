import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'

const page2 = () => {
  return <>
    <SEO title="About" />

    <h1>About</h1>

    <Link to="/">Go back to the homepage</Link>
  </>
}

export default page2;