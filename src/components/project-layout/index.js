import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layout';
import ProjectHeader from '../project-header';

const ProjectLayout = props => {
  return (
    <Layout>
      <ProjectHeader />
    </Layout>
  )
}

ProjectLayout.propTypes = {

}

export default ProjectLayout;
