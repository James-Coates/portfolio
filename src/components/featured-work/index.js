import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from 'gatsby';

import FeatureProject from '../feature-project';

import featuredWorkStyles from './featured-work-styles.module.scss';

const FeaturedWork = () => {
  const { allProjectsJson } = useStaticQuery(
    graphql`
      query {
        allProjectsJson (filter: {featured: {eq: true}}) {
          edges {
            node {
              id
              title
              descShort
              slug
              tags
              colorDark
              image {
                relativePath
              }
            }
          }
        }
      }
    `
  );
  const featuredProjects = allProjectsJson.edges.map((edge) => edge.node);
  console.log(featuredProjects); 
  return (
    <section className={featuredWorkStyles.section} id="featured-work">
      <div className={featuredWorkStyles.container}>
        <div className="col-sm-100 col-lg-60">
          <h3 className={featuredWorkStyles.heading}>
            Featured Projects
          </h3>
          <p className={featuredWorkStyles.subHeading}>
            A few projects i'm most excited about.
          </p>
          <Link to="./projects" className="btn btn-secondary-light">View the full project list</Link>
        </div>
      </div>
      { featuredProjects.map((project) => (
        <FeatureProject key={project.id} project={project}/>
      )) }
    </section>
  );
}

export default FeaturedWork;
