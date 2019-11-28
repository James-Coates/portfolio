import React from 'react';

import Layout from '../components/layout';
import Landing from '../components/landing';
import About from '../components/about';
import Portfolio from '../components/portfolio';
import LandingContact from '../components/landing-contact';

import '../styles/main.scss';

const IndexPage = () => (
  <Layout>
    <Landing />
    <Portfolio />
    <About />
    <LandingContact />
  </Layout>
);

export default IndexPage;
