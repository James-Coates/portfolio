import React from "react";

import Layout from '../components/layout';
import Landing from "../components/landing"
import FeaturedWork from "../components/featured-work"

import '../styles/main.scss';

const IndexPage = () => {
  return (
    <Layout>
      <Landing />
      <FeaturedWork />
    </Layout>
  )
}

export default IndexPage
