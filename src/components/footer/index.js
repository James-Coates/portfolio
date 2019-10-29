import React from "react";
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faMediumM } from '@fortawesome/free-brands-svg-icons';

import FooterForm from '../footer-form';

import FooterStyles from './footer-styles.module.scss';

const Footer = () => (
  <footer className={FooterStyles.wrapper}>
    <div className={FooterStyles.container}>
      <div className={FooterStyles.col1}>
        <div className={FooterStyles.head}>
          <h1 className={FooterStyles.header}>Get in touch</h1>
            <a href="mailto:james.coates@me.com">
              <p className={FooterStyles.email}>
                james.coates@me.com
              </p>
            </a>
        </div>
        <div className={FooterStyles.formContainer}>
          <FooterForm />
        </div>
      </div>
      <div className={FooterStyles.col2}>
        <div className={FooterStyles.social}>
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faMediumM} />
        </div>
      </div>
    </div>
  </footer>
)

export default Footer;
