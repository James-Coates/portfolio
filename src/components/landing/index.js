import React from "react"

import landingStyles from './landing-styles.module.scss';

const Landing = () => (
  <section className={landingStyles.section}>
    <h2 className={landingStyles.display}>James</h2>
    <p className={landingStyles.subDisplay}>DEVELOPER & ENGINEER</p>
    <div className={landingStyles.scroll}>
      <p>Scroll</p>
      <i className={`icon ion-ios-arrow-round-down ${landingStyles.icon}`}></i>
    </div>
  </section>
)

export default Landing
