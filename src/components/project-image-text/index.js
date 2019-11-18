import React from 'react';
import PropTypes from 'prop-types';

import projectImageTextStyles from './project-image-text.module.scss';

const ProjectImageTextStyles = ({reverse, image, video, children}) => {
  return (
    <div className={projectImageTextStyles.wrapper}>
      <div className={`${projectImageTextStyles.container} ${reverse ? 'reverse' : ''}`}>
        <div className={projectImageTextStyles.text}>
          <div>
            {children}
          </div>
        </div>
        <div className={projectImageTextStyles.image}>
          {video ? (
            <video loop autoPlay muted src={video} />
          ) : (
            <img src={image.path} alt={image.name} />
          )}
        </div>
      </div>
    </div>
  )
}

ProjectImageTextStyles.propTypes = {

};

export default ProjectImageTextStyles;
