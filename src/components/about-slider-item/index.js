import React from 'react';
import PropTypes from 'prop-types';

import aboutSliderItemStyles from './about-sliderItem-styles.module.scss';

const AboutSliderItem = ({ item }) => {
  return (
    <div className={aboutSliderItemStyles.container}>
      <img 
        src={item.icon.publicURL}
        alt={item.name}
        className={`${aboutSliderItemStyles.icon} icon-filter`}
      />
      <h1>{item.name}</h1>
    </div>
  )
}

AboutSliderItem.propTypes = {

}

export default AboutSliderItem;
