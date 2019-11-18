import React from 'react';
import PropTypes from 'prop-types';

import projectLandingStyles from './project-landing-styles.module.scss';

const ProjectLanding = ({ project }) => {
  const { title, rubric, overview, created, tags, link, repo } = project;
  return (
    <div className={projectLandingStyles.wrapper}>
      <div className={projectLandingStyles.container}>
        <div className={projectLandingStyles.content}>
          <h1 className={projectLandingStyles.heading}>
            {title}
          </h1>
          <h2 className={projectLandingStyles.rubric}>
            {rubric}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: overview }} />
          <div className={projectLandingStyles.details}>
            <div className={projectLandingStyles.year}>
              <p>
                <span className={projectLandingStyles.label}>Developed</span>
                <span className={projectLandingStyles.detail}>{created}</span>
              </p>
            </div>
            <div className={projectLandingStyles.tags}>
              <p>
                <span className={projectLandingStyles.label}>
                  Tags
                </span>
                {tags.map((tag) => (
                  <span className={projectLandingStyles.detail} key={tag}>
                    {tag}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className={projectLandingStyles.buttonContainer}>
            { link ? (
              <a href={link} className="btn" target="blank">View Site</a>
            ) : null }
            <a href={repo} className="btn" target="blank">View Repo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectLanding.propTypes = {
};

export default ProjectLanding;
