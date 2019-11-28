import React from 'react';
import PropTypes from 'prop-types';

import featuredWorkStyles from './featured-work-styles.module.scss';

import FeaturedWorkItem from '../featured-work-item';

const FeaturedWork = props => {
  return (
    <div className={featuredWorkStyles.container}>
      <FeaturedWorkItem />
      <FeaturedWorkItem />
      <FeaturedWorkItem />
      <FeaturedWorkItem />
    </div>
  );
};

FeaturedWork.propTypes = {

};

export default FeaturedWork;
