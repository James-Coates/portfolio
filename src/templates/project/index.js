import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout';
import ProjectLanding from '../../components/project-landing';
import ProjectObjective from '../../components/project-objective';
import ProjectScreens from '../../components/project-screens';
import BackToWorkList from '../../components/back-to-worklist';

import projectStyles from './project-styles.module.scss';

export const query = graphql`
  query($id: String!) {
    projectsJson(id: {eq: $id}) {
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
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileScreen {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopScreen {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default function project({ data }) {
  console.log(data);
  const project = data.projectsJson;
  return (
    <Layout>
      <ProjectLanding project={project}/>
      <ProjectObjective project={project}/>
      <ProjectScreens project={project}/>
      <BackToWorkList />
    </Layout>
  )
}
