import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { useStaticQuery, graphql } from 'gatsby';

import Feature from '../feature';
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

  useEffect(() => {
    const config1 = {
      duration: 2000,
      distance: '30px',
    };
    const config2 = {
      delay: 500,
      duration: 2000,
      distance: '30px',
    };
    ScrollReveal().reveal('.reveal1', config1);
    ScrollReveal().reveal('.reveal2', config2);
  });

  return (
    <section className={aboutStyles.wrapper} id="about-section">
      <div className={aboutStyles.container} id="about">
        <div className={aboutStyles.main}>
          <div className={`${aboutStyles.imgFrame} reveal1`}>
            <img src={me} alt="Me" className={aboutStyles.img} />
          </div>
          <div className={aboutStyles.content}>
            <h1 className={`${aboutStyles.heading} reveal1`}>
              James Coates
            </h1>
            <div className="reveal2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className={aboutStyles.features}>
          {features.map((feature) => (
            <Feature feature={feature} />
          ))}
        </div>
      </div>
      <Accordian />
    </section>
  );
};

export default About;
