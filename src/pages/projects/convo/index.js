import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import ProjectLayout from '../../../components/project-layout';
import ProjectTextBlock from '../../../components/project-text-block';
import ProjectImageBlock from '../../../components/project-image-block';
import ProjectImageText from '../../../components/project-image-text';

const kanbanImagePath = require('../../../images/projects/convo/kanban.png');

const index = () => {
  const data = useStaticQuery(graphql`
    query {
      projectsJson(id: {eq: "convo"}) {
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
  const kanbanImage = {
    name: 'Kanban Board',
    path: kanbanImagePath,
  };

  return (
    <ProjectLayout project={project}>
      <ProjectTextBlock heading="Approach">
        <p>
          CONVO was developed using an agile project management approach including user
          stories, story points, and a kanban board.
        </p>
      </ProjectTextBlock>
      <ProjectImageText image={kanbanImage}>
        <h3>Kanban Board</h3>
        <p>
        The applications features listed on the Kanban board were tackled individually.
        Story points were allocated to each feature/task according to the estimated time
        required to complete the task. This led to an efficient use of time with the
        additional benefit of ensuring all features outlined in the scope were met.
        </p>
      </ProjectImageText>
    </ProjectLayout>
  );
};

index.propTypes = {
};

export default index;
