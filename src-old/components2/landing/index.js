import React from "react";
import { Link } from 'gatsby';

import landingStyles from './landing-styles.module.scss';

const Landing = () => (
  <section className={landingStyles.section}>
    <div className={landingStyles.container}>
      <div className={landingStyles.content}>
        <p className={landingStyles.display}>HELLO,</p>
        <p className={landingStyles.subDisplay}>My name’s James and I’m a web developer currently based in Nottingham in the UK. </p>
        <p className={landingStyles.subDisplay}>With a background in engineering and a passion for code I hope to help shape the web of tomorrow.</p>
        <Link to="#about" className={landingStyles.btn}>
          View Latest Work &#10142;
        </Link>
      </div>
    </div>
  </section>
)

export default Landing
