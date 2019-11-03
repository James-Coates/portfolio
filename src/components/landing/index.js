import React from "react";
import { Link } from 'gatsby';

import landingStyles from './landing-styles.module.scss';

const Landing = () => (
  <section className={landingStyles.section}>
    <h2 className={landingStyles.display}>James</h2>
    <p className={landingStyles.subDisplay}>DEVELOPER & ENGINEER</p>
    <Link to="#about">
      <div className={landingStyles.scroll}>
        <p>Scroll</p>
        <i className={`icon ion-ios-arrow-round-down ${landingStyles.icon}`}></i>
      </div>
    </Link>
  </section>
)

export default Landing
