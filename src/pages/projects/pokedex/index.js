import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import ProjectLayout from '../../../components/project-layout';

const index = () => {
  const data = useStaticQuery(graphql`
    query {
      projectsJson(id: {eq: "flix"}) {
        id
        title
        descShort
        objective
        solution
        tags
        colorDark
        tech
        link
        repo
        mobileOnly
      }
    }
  `);
  const project = data.projectsJson;
  return (
    <ProjectLayout>
      {project.title}
    </ProjectLayout>
  )
}

index.propTypes = {
};

export default index;
