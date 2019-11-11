import React from 'react';

import Layout from '../components/layout';
import Landing from '../components/landing';
import About from '../components/about';
import Portfolio from '../components/portfolio';

import '../styles/main.scss';

const IndexPage = () => (
  <Layout>
    <Landing />
    <About />
    <Portfolio />
  </Layout>
);

export default IndexPage;
