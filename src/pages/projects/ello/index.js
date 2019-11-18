import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import ProjectLayout from '../../../components/project-layout';
import ProjectTextBlock from '../../../components/project-text-block';
import ProjectImageBlock from '../../../components/project-image-block';
import ProjectHalfScroll from '../../../components/project-half-scroll';
import ProjectImageText from '../../../components/project-image-text';

const testImagePath = require('../../../images/projects/ello/testscenario.png');
const jestImagePath = require('../../../images/projects/ello/jest.png');
const screenImagePath = require('../../../images/projects/ello/screen.png');

const index = () => {
  const data = useStaticQuery(graphql`
    query {
      projectsJson(id: {eq: "ello"}) {
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
  const testImage = {
    name: 'Test Scenario',
    path: testImagePath,
  }
  const jestImage = {
    name: 'Jest & React',
    path: jestImagePath,
  }
  const screenImage = {
    name: 'Ello Screen Preview',
    path: screenImagePath,
  }
  return (
    <ProjectLayout project={project}>
      <ProjectTextBlock heading="Approach">
        <p>
          A test-driven development approach was used throughout the project. Before putting
          any functionality to code user stories were collated and several test scenarios
          were created.
        </p>
      </ProjectTextBlock>
      <ProjectImageText reverse image={testImage}>
        <h3>Behaviour Driven Development</h3>
        <p>
          By focusing on the behaviour of a wider range of stakeholders test scenarios can be
          created making it easy for both developers and non-developers to understand product
          requirements.
        </p>
        <p>
          Scenarios were written as succinct as possible using the ‘Gherkin’ syntax.
        </p>
      </ProjectImageText>
      <ProjectImageText image={jestImage}>
        <h3>Unit, Integration & End-to-end Testing</h3>
        <p>
        Testing during development was mainly carried out using Jest. This included unit and
        integration testing. Once the majority of features were completed end-to-end testing
        was carried out using cucumber.
        </p>
      </ProjectImageText>
      <ProjectTextBlock heading="The Result">
        <p>
          The app requires authorisation through Meetup to access events. Once this has been granted
          the application fetches upcoming events to display to the user.
        </p>
      </ProjectTextBlock>
      <ProjectHalfScroll image={screenImage}>
        <h3>Upcoming Events Display</h3>
        <p>
          At the top of the screen, below the landing section the user can search for events by
          city. Once a city is selected a list of events is displayed. Additionally at the top of
          the screen the user can view the number of upcoming events over the next seven days.
        </p>
      </ProjectHalfScroll>
    </ProjectLayout>
  );
};

index.propTypes = {
};

export default index;
