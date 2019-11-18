import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import ProjectLayout from '../../../components/project-layout';
import ProjectTextBlock from '../../../components/project-text-block';
import ProjectImageBlock from '../../../components/project-image-block';
import ProjectHalfScroll from '../../../components/project-half-scroll';
import ProjectImageText from '../../../components/project-image-text';

const mobile1 = require('../../../images/projects/pokedex/screens/mobile1.png');
const mobile2 = require('../../../images/projects/pokedex/screens/mobile2.png');
const desktop = require('../../../images/projects/pokedex/screens/desktop.png');
const video = require('../../../images/projects/pokedex/mockup.mp4');

const index = () => {
  const data = useStaticQuery(graphql`
    query {
      projectsJson(id: {eq: "pokedex"}) {
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
  const resultsImages = {
    row1: [
      {
        name: 'List Screen',
        path: mobile1,
      },
      {
        name: 'Details Screen',
        path: mobile2,
      }],
    row2: [
      {
        name: 'Desktop Screen',
        path: desktop,
      },
    ],
  };
  return (
    <ProjectLayout project={project}>
      <ProjectTextBlock heading="Context">
        <p>
          A ‘Pokedex’ app was ideal for meeting the objective of producing a list of data points
          from an external API. The PokeAPI provides access to a complete list of Pokemon within
          an easily accessible RESTful API. The interface which would have to be built into the
          application occurs over two separate fetch operations. One to retrieve the list of
          Pokemon and one retrieve detailed information once a Pokemon is selected. This data is
          fed into the user interface (UI) to build the two main screens.
        </p>
      </ProjectTextBlock>
      <ProjectImageText reverse video={video}>
        <h3>Mockup & User Flow</h3>
        <p>
          A mockup was built prior to building the (UI) to ensure the desired features were
          achieved. On loading the app, the full list of Pokemon is displayed to the user.
          The scrollable list would provide a search facility to filter Pokemon by name. A
          Pokemon can be selected to show a detailed view of the selected Pokemon. On larger
          screens it was planned to show both views on one screen with placeholder information
          shown before a Pokemon is selected.
        </p>
      </ProjectImageText>
      <ProjectTextBlock heading="The Result">
        <p>
          A clean, simple and responsive user interface providing the user with a filterable
          list of Pokemon. The detailed view is shown on the right hand side for larger screens
          and within a modal for smaller screens.
        </p>
      </ProjectTextBlock>
      <ProjectImageBlock images={resultsImages} />
    </ProjectLayout>
  );
};

index.propTypes = {
};

export default index;
