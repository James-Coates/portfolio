import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faMediumM } from '@fortawesome/free-brands-svg-icons';

import footerStyles from './footer-styles.module.scss';

const Footer = props => {
  return (
    <footer className={footerStyles.wrapper}>
      <div className={footerStyles.container}>
        <h4 className={footerStyles.heading}>
          <Link to="/">
            Get in Touch
          </Link>
        </h4>
        <p className={footerStyles.email}>
          <a href="mailto::james.coates@me.com">
            james.coates@me.com
          </a>
        </p>
        <div className={footerStyles.links}>
          <Link to="/">
            Home
          </Link>
          <Link to="/">
            About
          </Link>
          <Link to="/">
            Portfolio
          </Link>
        </div>
        <div className={footerStyles.social}>
          <a className={footerStyles.twitter} href="https://twitter.com/_JamesCoates">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className={footerStyles.github} href="https://github.com/James-Coates">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className={footerStyles.medium} href="https://medium.com/@jamescoates192">
            <FontAwesomeIcon icon={faMediumM} />
          </a>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {

}

export default Footer;
