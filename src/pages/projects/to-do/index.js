import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import ProjectLayout from '../../../components/project-layout';
import ProjectTextBlock from '../../../components/project-text-block';
import ProjectImageBlock from '../../../components/project-image-block';
import ProjectImageText from '../../../components/project-image-text';

const screenImagePath = require('../../../images/projects/todo/screens/screen.png');

const index = () => {
  const data = useStaticQuery(graphql`
    query {
      projectsJson(id: {eq: "todo"}) {
        id
        title
        rubric
        overview
        created
        tags
        banner {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        scope
        objective
        solution
        colorDark
        tech
        link
        repo
        mobileOnly
      }
    }
  `);
  const project = data.projectsJson;
  const screenImage = {
    name: 'Seperation of concerns',
    path: screenImagePath,
  };

  return (
    <ProjectLayout project={project}>
      <ProjectTextBlock heading="The Result">
        <p>
          A single page web application offering the basic features of a to-do list.
          Items can be added, ticked off and removed from the list. The application
          can be improved on by storing information within the browser’s local storage
          so that the to-do list can be stored for future use.
        </p>
      </ProjectTextBlock>
      <ProjectImageText image={screenImage}>
        <h3>Screen</h3>
        <p>
          A single screen with a list of items displayed to the user. The UI is based on
          Google's material design system offering a clean user interface.
        </p>
      </ProjectImageText>
    </ProjectLayout>
  );
};

index.propTypes = {
};

export default index;
