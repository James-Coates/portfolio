import React from "react";
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
        <div className={FooterStyles.formContainer} id="contact">
          <FooterForm />
        </div>
      </div>
      <div className={FooterStyles.col2}>
        <div className={FooterStyles.social}>
          <a href="https://twitter.com/_JamesCoates">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://github.com/James-Coates">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://medium.com/@jamescoates192">
            <FontAwesomeIcon icon={faMediumM} />
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer;
