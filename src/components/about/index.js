import React, { useEffect } from 'react';
// import ScrollReveal from 'scrollreveal';
import { useStaticQuery, graphql } from 'gatsby';

import Feature from '../feature';
import AboutHeader from '../about-header';
import Accordian from '../about-accordian';

import aboutStyles from './about-styles.module.scss';

const me = require('../../images/portfolio-me-2.png');

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allFeaturesJson {
        edges {
          node {
            name
            description
            icon {
              publicURL
            }
          }
        }
      }
    }
  `);
  const features = data.allFeaturesJson.edges.map((edge) => edge.node);

  // useEffect(() => {
  //   const config1 = {
  //     duration: 2000,
  //     distance: '30px',
  //   };
  //   const config2 = {
  //     delay: 500,
  //     duration: 2000,
  //     distance: '30px',
  //   };
  //   ScrollReveal().reveal('.reveal1', config1);
  //   ScrollReveal().reveal('.reveal2', config2);
  // });

  return (
    <section className={`pt-lg ${aboutStyles.wrapper}`} id="about-section">
      <AboutHeader />
      <Accordian />
    </section>
  );
};

export default About;
