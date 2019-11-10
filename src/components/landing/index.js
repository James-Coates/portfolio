import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Link } from 'gatsby';

import landingStyles from './landing-styles.module.scss';
const downArrow = require('../../images/icons/nav/down.svg');

const Landing = () => {
  useEffect(() => {
    const configContent = {
      duration: 2000,
      distance: '30px',
    };
    const configButton = {
      delay: 1000,
      duration: 1000,
    };
    ScrollReveal().reveal('#content', configContent);
    ScrollReveal().reveal('#view-more', configButton);
  });
  return (
    <section className={landingStyles.wrapper}>
      <div className={landingStyles.container}>
        <div className={landingStyles.content} id="content">
          <p className={landingStyles.display}>Hello,</p>
          <div>
            <p>
              My name’s James and I’m a web developer currently
              based in Nottingham in the UK.
            </p>
            <p>
              With a background in engineering and a passion for
              code I hope to help shape the web of tomorrow.
            </p>
          </div>
        </div>
        <Link to="#about" className={landingStyles.down} id="view-more">
          <img src={downArrow} alt="View More Button" />
        </Link>
      </div>
    </section>
  );
};

export default Landing;
