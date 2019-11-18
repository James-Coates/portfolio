import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import ProjectLayout from '../../../components/project-layout';
import ProjectTextBlock from '../../../components/project-text-block';
import ProjectImageBlock from '../../../components/project-image-block';
import ProjectHalfScroll from '../../../components/project-half-scroll';
import ProjectImageText from '../../../components/project-image-text';

const screen1 = require('../../../images/projects/btc-quiz/screens/screen1.png');
const screen2 = require('../../../images/projects/btc-quiz/screens/screen2.png');
const screen3 = require('../../../images/projects/btc-quiz/screens/screen3.png');
const mockup = require('../../../images/projects/btc-quiz/mockup.jpg');

const index = () => {
  const data = useStaticQuery(graphql`
    query {
      projectsJson(id: {eq: "btcquiz"}) {
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
  const mockupImages = {
    row1: [{
      name: 'mockup',
      path: mockup,
    }],
  };
  const screenImages = {
    row1: [
      {
        name: 'Welcome Screen',
        path: screen1,
      },
      {
        name: 'Question Screen',
        path: screen2,
      },
      {
        name: 'Results Screen',
        path: screen3,
      }],
  };
  return (
    <ProjectLayout project={project}>
      <ProjectTextBlock heading="Approach">
        <p>
          A large focus of this web app was to provide a smooth user experience.
          First off a welcome screen is displayed providing the user with a selection
          of quizzes. On selecting a quiz the user is taken to the question views
          where the user will go through a series of multiple choice questions.
          Once all questions are complete the results are displayed with the option
          of returning to the home screen to take another quiz.
        </p>
      </ProjectTextBlock>
      <ProjectImageBlock images={mockupImages} />
      <ProjectTextBlock heading="The Result">
        <p>
        An Angular built single page web application using advanced concepts such as
        data binding, interpolation and routing to enable navigation through the app.
        The Bootstrap library was used to enable the clean user interface with subtle
        animations added to polish off the look and feel.
        </p>
      </ProjectTextBlock>
      <ProjectImageBlock images={screenImages} />
    </ProjectLayout>
  );
};

index.propTypes = {
};

export default index;
