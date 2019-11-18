import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

export const query = graphql`
  query($id: String!) {
    projectsJson(id: {eq: $id}) {
      id
      title
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
`;

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson;
  return (
    <div>
      { project.title }
    </div>
  );
};

ProjectTemplate.propTypes = {

};

export default ProjectTemplate;
