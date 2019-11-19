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
              About James
            </h1>
            <div className="reveal2">
              <p>
                A determined engineer turned developer with a passion for writing efficient code.
                A quick learner with an intense hunger for knowledge, particularly when it comes
                to the latest tech and frameworks.
              </p>
              <p>
                Currently based in Nottingham, open to new oppotunities in the UK.
              </p>
            </div>
          </div>
        </div>
        <div className={aboutStyles.features}>
          {features.map((feature) => (
            <Feature feature={feature} key={feature.name} />
          ))}
        </div>
      </div>
      <Accordian />
    </section>
  );
};

export default About;
