import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import featureStyles from './feature-styles.module.scss';

const Feature = ({feature}) => {
  useEffect(() => {
    const config1 = {
      duration: 2000,
      distance: '30px',
    };
    ScrollReveal().reveal('#feature', config1);
  });

  return (
    <div className={featureStyles.container} id="feature">
      <img src={feature.icon.publicURL} alt="x" className={`icon-filter ${featureStyles.icon}`} />
      <h1 className={featureStyles.heading}>
        {feature.name}
      </h1>
      <p>
        {feature.description}
      </p>
    </div>
  );
}


export default Feature;
