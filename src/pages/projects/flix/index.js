import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import ProjectLayout from '../../../components/project-layout';
import ProjectTextBlock from '../../../components/project-text-block';
import ProjectImageBlock from '../../../components/project-image-block';
import ProjectImageText from '../../../components/project-image-text';

const approachImagePath = require('../../../images/projects/flix/flix-approach.png');
const mockupPath = require('../../../images/projects/flix/flix-mockup.png');
const listViewPath = require('../../../images/projects/flix/screens/list-view.png');
const movieViewPath = require('../../../images/projects/flix/screens/movie-view.png');

const index = () => {
  const data = useStaticQuery(graphql`
    query {
      projectsJson(id: {eq: "flix"}) {
        id
        title
        rubric
        overview
        created
        tags
        banner {
          publicURL
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
  const approachImage = {
    name: 'Seperation of concerns',
    path: approachImagePath,
  };
  const mockupImage = {
    name: 'Flix Mockup',
    path: mockupPath,
  };
  const resultsImages = {
    row1: [
      {
        name: 'List Screen',
        path: listViewPath,
      },
    ],
    row2: [
      {
        name: 'Movie Screen',
        path: movieViewPath,
      },
    ],
  };
  return (
    <ProjectLayout project={project}>
      <ProjectTextBlock heading="Approach">
        <p>
          The project was built across two milestones. The first of which was building the
          server-side REST API. This was built on NodeJS using Express to streamline the
          build process. Because this app is a prototybe requiring limited data retirval a
          MongoDb database was selected and easily integrated into the Express App through
          Mongoose.
        </p>
      </ProjectTextBlock>
      <ProjectImageText image={approachImage}>
        <h3>Server Side</h3>
        <p>
          As this was the first server side application, to ensure a strong foundation and
          adherence to best practices I spent a significant amount of time researching best
          practices for structuring server side code such as Express routing, and the management
          of controllers and services. By dividing the application into individual elements that
          handled particular concerns such as the routes, controllers and services the application
          became much more scalable and easy to maintain. This clean structure resulted in an easy
          to use and highly scalable API.
        </p>
      </ProjectImageText>
      <ProjectImageText image={mockupImage} reverse>
        <h3>Client Side</h3>
        <p>
          The second part of the project was to build the client side user interface that interacts
          with the API. I initially jumped straight into the project but soon discovered that this
          led to a poor code structure which was very difficult to maintain. Early on in the project
          I decided to restructure the code off wireframes. The result was a much slicker user
          interface that was also much easier to maintain.
        </p>
      </ProjectImageText>
      <ProjectTextBlock heading="The Result">
        <p>
          A full-stack web application with a clean dark UI. The application features user authentication,
          a movie list view, movie details view and a user page.
        </p>
      </ProjectTextBlock>
      <ProjectImageBlock images={resultsImages} />
    </ProjectLayout>
  );
};

index.propTypes = {
};

export default index;
