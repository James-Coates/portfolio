import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faMediumM } from '@fortawesome/free-brands-svg-icons';

import footerStyles from './footer-styles.module.scss';

const Footer = ({contactActive, setContactActive}) => {
  return (
    <footer className={footerStyles.wrapper}>
      <div className={footerStyles.container}>
        <div className={footerStyles.tm}>
          © 2019 | Made with love by James
        </div>
        <div className={footerStyles.social}>
          <a className={footerStyles.twitter} href="https://twitter.com/_JamesCoates" target="blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className={footerStyles.github} href="https://github.com/James-Coates" target="blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className={footerStyles.medium} href="https://medium.com/@jamescoates192" target="blank">
              <FontAwesomeIcon icon={faMediumM} />
          </a>
        </div>
        <div className={footerStyles.email}>
          <p>
            <a href="mailto:james.coates@me.com">
            james.coates@me.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {

}

export default Footer;
