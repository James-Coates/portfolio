import React from "react";

import aboutStyles from './about-styles.module.scss';

const About = () => {
  return (
    <section className={aboutStyles.section} id="about">
      <div className={aboutStyles.container}>
        <img  className={aboutStyles.image} src={require('../../images/james.png')} />
        <h3>Hey,</h3>
        <p>My name is James and I'm a developer and engineer based in the 
          UK. I love to tinker, design and build things.</p>
        <p>I'm passionate about Bitcoin and public blockchain tech, with a keen 
          interest in global macroeconomics.</p>
      </div>
    </section>
  );
}

export default About;
