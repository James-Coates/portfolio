import React from "react";
import { graphql, useStaticQuery } from 'gatsby';

import WorkItem from '../work-item';

import workListStyles from './work-list-styles.module.scss';

const WorkList = () => {
  const { allProjectsJson } = useStaticQuery(
    graphql`
      query {
        allProjectsJson {
          edges {
            node {
              id
              title
              slug
              tags
              colorDark
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  const projects = allProjectsJson.edges.map((el) => { 
    const project = el.node;
    return project;
  });
  return (
    <div className={workListStyles.container}>
      {projects.map((project) => (
        <WorkItem project={project} key={project.id} />
      ))}
    </div>
  )
};

export default WorkList
