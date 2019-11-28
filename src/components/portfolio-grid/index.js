import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import PortfolioItem from '../portfolio-item';

import portfolioGridStyles from './portfolio-grid-styles.module.scss';

const index = props => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            id
            title
            slug
            tags
            rubric
            overview
            colorDark
            link
            repo
            gridImage {
              relativePath
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            gridSpan {
              rows
              cols
            }
          }
        }
      }
    }
  `);
  const projects = data.allProjectsJson.edges.map((edge) => edge.node);
  return (
    <div className={portfolioGridStyles.grid}>
      {projects.map((project) => (
        <PortfolioItem project={project} key={project.title} />
      ))}
    </div>
  );
};

index.propTypes = {

};

export default index;
