import React from 'react';
import PropTypes from 'prop-types';

import projectHeaderStyles from './project-header-styles.module.scss';

const ProjectHeader = props => {
  return (
    <div className={projectHeaderStyles.wrapper}>
      <div className={projectHeaderStyles.upper}>
        <div className={projectHeaderStyles.container}>
          <h1 className={projectHeaderStyles.heading}>
            Flix
          </h1>
          <h2 className={projectHeaderStyles.rubric}>Web Development</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam consequat.
          </p>
          <div className={projectHeaderStyles.details}>
            <div className={projectHeaderStyles.year}>
              <p>
                <span className={projectHeaderStyles.label}>Year</span>
                <span className={projectHeaderStyles.detail}>2019</span>
              </p>
            </div>
            <div className={projectHeaderStyles.tags}>
              <p>
              <span className={projectHeaderStyles.label}>Tags</span>
              <span className={projectHeaderStyles.detail}>React, Web App</span>
            </p>
            </div>
          </div>
        </div>
      </div>
      <div className={projectHeaderStyles.lower}>
        <div className={projectHeaderStyles.container}>
          <div className={projectHeaderStyles.image}>
          </div>
          <div className={projectHeaderStyles.another}>
            <div>
              <h3>Overview</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam consequat.
              </p>
            </div>
            <div>
              Tech Stack
              <ul>
                <li>Bla</li>
                <li>Bla</li>
                <li>Bla</li>
              </ul>
              Scope
              <ul>
                <li>Bla</li>
                <li>Bla</li>
                <li>Bla</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectHeader.propTypes = {

}

export default ProjectHeader;
