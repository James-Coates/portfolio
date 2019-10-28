import React from "react"
import Helmet from "react-helmet"

import SEO from "../components/seo"
import Landing from "../components/landing"
import FeaturedWork from "../components/featured-work"

import '../styles/main.scss';

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Helmet>
      <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet"/>
    </Helmet>
    <Landing />
    <FeaturedWork />
  </div>
)

export default IndexPage
