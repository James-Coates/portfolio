import React from 'react';
import { Link } from 'gatsby';

import landingStyles from './landing-styles.module.scss';
const downArrow = require('../../images/icons/nav/down.svg');

const Landing = () => (
  <section className={landingStyles.wrapper}>
    <div className={landingStyles.container}>
      <div className={landingStyles.content}>
        <p className={landingStyles.display}>Hello,</p>
        <p>My name’s James and I’m a web developer currently based in Nottingham in the UK. </p>
        <p>With a background in engineering and a passion for code I hope to help shape the web of tomorrow.</p>
      </div>
      <Link to="#about" className={landingStyles.down}>
        <img src={downArrow} alt="View More Button" />
      </Link>
    </div>
  </section>
);

export default Landing;
