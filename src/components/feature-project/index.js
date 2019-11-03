import React from "react";
import { Link } from 'gatsby';
import Image from 'gatsby-image';

import featuredProjectStyles from './feature-project-styles.module.scss';

const FeatureProject = ({ project }) => {
  const { id, title, slug, tags, descShort, colorDark, image } = project;
  return (
    <div 
      className={featuredProjectStyles.wrapper} 
      style={{backgroundColor: colorDark}}
    >
      <div className={featuredProjectStyles.container}>
        <div className={featuredProjectStyles.details}>
          <div className={featuredProjectStyles.tags}>
                {tags.map((tag) => (
                  <p key={tag}>{tag}</p>
                ))}
              </div>
              <h3 className={featuredProjectStyles.title}>
                {title}
              </h3>
              <div className={featuredProjectStyles.description} dangerouslySetInnerHTML={{__html: descShort}} />
            <Link className="btn btn-primary-dark" to={`/projects/${slug}`}>Find out more</Link>
        </div>
        <div className={featuredProjectStyles.imageContainer}>
          <img 
            className={featuredProjectStyles.image}
            src={require(`../../data/${image.relativePath}`)}
            alt='test'
          />
        </div>
      </div>
    </div>
  );
}

export default FeatureProject;

{/* <div className={featuredProjectStyles.container}>
        <div className="col-sm-100 col-lg-50">
          <img 
            className={featuredProjectStyles.image}
            src={require(`../../data/${image.relativePath}`)}
            alt='test'
          />
        </div>
        <div className="col-sm-100 col-lg-50">
          <div className={featuredProjectStyles.details}>
            <div className={featuredProjectStyles.tags}>
              {tags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))}
            </div>
            <h3 className={featuredProjectStyles.title}>
              {title}
            </h3>
            <p className={featuredProjectStyles.description}>
            { descShort }
            </p>
            <Link className="btn btn-secondary-dark" to={`/projects/${slug}`}>Find out more</Link>
          </div>
        </div> */}