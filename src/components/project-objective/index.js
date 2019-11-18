import React from 'react';
import PropTypes from 'prop-types';

import projectObjectiveStyles from './project-objective-styles.module.scss';

const ProjectObjective = ({ project }) => {
  const { banner, objective, tech, scope } = project;
  return (
    <div className={projectObjectiveStyles.wrapper}>
      <div className={projectObjectiveStyles.container}>
        <div className={projectObjectiveStyles.content}>
          <div className={projectObjectiveStyles.objective}>
            <h3 className={projectObjectiveStyles.heading}>Objective</h3>
            <div dangerouslySetInnerHTML={{__html: objective}} />
          </div>
          <div className={projectObjectiveStyles.details}>
            <div>
              <p>Tech Stack</p>
              <ul>
                {tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p>Scope</p>
              <ul>
                {scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectObjective.propTypes = {
};

export default ProjectObjective;
