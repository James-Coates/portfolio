import React from 'react';
import PropTypes from 'prop-types';

import meImage from '../../images/me.png';

import aboutHeaderStyles from './about-header-styles.module.scss';

const AboutHeader = props => {
  return (
    <div className={aboutHeaderStyles.wrapper} id="about">
      <div className={aboutHeaderStyles.container}>
        <div className={aboutHeaderStyles.img}>
          <div></div>
          <img src={meImage} alt="me" />
        </div>
        <div className={aboutHeaderStyles.content}>
          <h2 className={`heading-lg ${aboutHeaderStyles.heading}`}>Meet James</h2>
          <p className="paragraph-lg">
            An engineer turned developer with a passion for building things on the web.
          </p>
          <p className="paragraph-md">
            Hi, I’m James a highly motivated developer with a background in engineering.
            I thrive on solving problems, it is something that is second nature to me.
            Over the years I have refined this skill, along with critical thinking to solve
            and develop engineered systems from business support tools to mechanical propulsion
            systems. Typically I am very difficult to satisfy, always looking for a way of
            optimising the solution that little bit further.
          </p>
          <p className="paragraph-md">
            When I first began to code everything seemed to fall into place. I became addicted
            to building and improving codebases. Drawn by the modularity of code and the
            ever-growing technological developments of tools and languages, I knew a career as
            a developer was right for me. Nothing excites me more than the thought of a future
            working with a group of ambitious, like-minded individuals striving to enhance the
            way we interact with technology and the web.
          </p>
        </div>
      </div>
    </div>
  )
}

AboutHeader.propTypes = {

}

export default AboutHeader
