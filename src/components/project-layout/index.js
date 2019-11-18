import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layout';
import ProjectLanding from '../project-landing';
import ProjectBanner from '../project-banner';
import ProjectObjective from '../project-objective';

import projectLayoutStyles from './project-layout-styles.module.scss';

const ProjectLayout = ({ children, project }) => {
  return (
    <Layout>
      <ProjectLanding project={project} />
      <ProjectBanner project={project} />
      <ProjectObjective project={project} />
      <div className={projectLayoutStyles.wrapper}>
        { children }
      </div>
    </Layout>
  );
};

ProjectLayout.propTypes = {

};

export default ProjectLayout;
