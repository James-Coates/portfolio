import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Glide from '@glidejs/glide';
import ScrollReveal from 'scrollreveal';

import AboutSliderItem from '../about-slider-item';

import aboutAccordianStyles from './about-accordian-styles.module.scss';

const AboutAccordian = () => {
  useEffect(() => {
    new Glide('.glide').mount();
    const config1 = {
      duration: 2000,
      distance: '30px',
    };
    const config2 = {
      delay: 500,
      duration: 2000,
      distance: '30px',
    };
    ScrollReveal().reveal('#skills-head', config1);
    ScrollReveal().reveal('#skills-body', config2);
  });

  const data = useStaticQuery(graphql`
    query {
      allSkillsJson {
        edges {
          node {
            languages {
              name
              icon {
                publicURL
              }
            }
            frontend {
              name
              icon {
                publicURL
              }
            }
            backend {
              name
              icon {
                publicURL
              }
            }
            other {
              name
              icon {
                publicURL
              }
            }
          }
        }
      }
    }
  `);
  const { languages } = data.allSkillsJson.edges[0].node;
  const { frontend } = data.allSkillsJson.edges[1].node;
  const { backend } = data.allSkillsJson.edges[2].node;
  const { other } = data.allSkillsJson.edges[3].node;

  return (
    <div className={aboutAccordianStyles.container}>
      <h2 className={aboutAccordianStyles.heading} id="skills-head">My Skills & Toolset</h2>
      <div className="glide" id="skills-body">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <div
                className={`
                  ${aboutAccordianStyles.slide}
                  ${languages.length <= 4 ? aboutAccordianStyles.flex2 : aboutAccordianStyles.flex3}
                `}
              >
                { languages.map((item) => (
                  <AboutSliderItem item={item} key={item.name} />
                )) }
              </div>
              <div className={aboutAccordianStyles.label}>Languages</div>
            </li>
            <li className="glide__slide">
              <div
                className={`
                  ${aboutAccordianStyles.slide}
                  ${frontend.length < 4 ? aboutAccordianStyles.flex2 : aboutAccordianStyles.flex3}
                `}
              >
                { frontend.map((item) => (
                  <AboutSliderItem item={item} key={item.name} />
                )) }
              </div>
              <div className={aboutAccordianStyles.label}>Front End</div>
            </li>
            <li className="glide__slide">
              <div
                className={`
                  ${aboutAccordianStyles.slide}
                  ${backend.length < 4 ? aboutAccordianStyles.flex2 : aboutAccordianStyles.flex3}
                `}
              >
                { backend.map((item) => (
                  <AboutSliderItem item={item} key={item.name} />
                )) }
              </div>
              <div className={aboutAccordianStyles.label}>Back End</div>
            </li>
            <li className="glide__slide">
              <div
                className={`
                  ${aboutAccordianStyles.slide}
                  ${other.length < 4 ? aboutAccordianStyles.flex2 : aboutAccordianStyles.flex3}
                `}
              >
                { other.map((item) => (
                  <AboutSliderItem item={item} key={item.name} />
                )) }
              </div>
              <div className={aboutAccordianStyles.label}>Other</div>
            </li>
          </ul>
        </div>
        <div className="glide__bullets" data-glide-el="controls[nav]">
          <button className="glide__bullet" data-glide-dir="=0"></button>
          <button className="glide__bullet" data-glide-dir="=1"></button>
          <button className="glide__bullet" data-glide-dir="=2"></button>
          <button className="glide__bullet" data-glide-dir="=3"></button>
        </div>
      </div>
    </div>
  )
}

AboutAccordian.propTypes = {

}

export default AboutAccordian;
