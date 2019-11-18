import React from 'react';
import PropTypes from 'prop-types';

import projectTextBlockStyles from './project-text-block-styles.module.scss';

const ProjectTextBlock = ({heading, children}) => {
  return (
    <div className={projectTextBlockStyles.wrapper}>
      <div className={projectTextBlockStyles.container}>
        <div className={projectTextBlockStyles.content}>
          <h1 className={projectTextBlockStyles.heading}>{heading}</h1>
          {children}
        </div>
      </div>
    </div>
  )
}

ProjectTextBlock.propTypes = {
};

export default ProjectTextBlock;
