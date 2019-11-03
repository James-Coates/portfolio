import React from "react";

import Layout from '../components/layout';
import About from "../components/about"
import Landing from "../components/landing"
import FeaturedWork from "../components/featured-work"

import '../styles/main.scss';

const IndexPage = () => {
  return (
    <Layout>
      <Landing />
      <About />
      <FeaturedWork />
    </Layout>
  )
}

export default IndexPage
