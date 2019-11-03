import React from "react";

import aboutStyles from './about-styles.module.scss';

const About = () => {
  return (
    <section className={aboutStyles.section} id="about">
      <div className={aboutStyles.container}>
        <img  className={aboutStyles.image} src={require('../../images/james.png')} />
        <h3>Hey</h3>
        <p>I’m James a developer and  engineer based in the UK. I build all sorts from web apps to something else.</p>
      </div>
    </section>
  );
}

export default About;
