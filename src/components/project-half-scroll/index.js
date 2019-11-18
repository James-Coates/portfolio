import React from 'react';
import PropTypes from 'prop-types';

import projectHalfScrollStyles from './project-half-scroll-styles.module.scss';

const ProjectHalfScroll = ({image, children}) => {
  return (
    <div className={projectHalfScrollStyles.wrapper}>
      <div className={projectHalfScrollStyles.container}>
        <div className={projectHalfScrollStyles.text}>
          {children}
        </div>
        <div className={projectHalfScrollStyles.scrollImage}>
          <img src={image.path} alt={image.name} />
        </div>
      </div>
    </div>
  )
}

ProjectHalfScroll.propTypes = {

};

export default ProjectHalfScroll;
