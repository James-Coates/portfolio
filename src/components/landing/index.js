import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faMediumM, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import landingStyles from './landing-styles.module.scss';

const Landing = () => {
  return (
    <section className={landingStyles.wrapper}>
      <div className={landingStyles.container}>
        <div className={landingStyles.content} id="content">
          <p className={`${landingStyles.display}`}>
            Hi, I’m James a full-stack web developer based in Nottingham. Passionate about building things on the web.
          </p>
          <p className={`${landingStyles.display}`}>
            Currently open to new opportunities across the UK.
          </p>
          <div className={landingStyles.down}>
            <Link to="#portfolio" id="view-more">
              <FontAwesomeIcon icon={faArrowDown} className={`${landingStyles.arrow} ${landingStyles.bounce}`} />
              View Selected Work
            </Link>
          </div>
        </div>
        {/* <div className={landingStyles.social}>
          <a href="https://github.com/James-Coates">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://github.com/James-Coates">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://github.com/James-Coates">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/James-Coates">
            <FontAwesomeIcon icon={faMediumM} />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Landing;
