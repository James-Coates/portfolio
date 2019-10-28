import React from "react"

import FooterStyles from './footer-styles.module.scss';

const Footer = () => (
  <footer className={FooterStyles.wrapper}>
    <div className={FooterStyles.container}>
      <h1 className={FooterStyles.header}>Get in touch</h1>
    </div>
  </footer>
)

export default Footer;
