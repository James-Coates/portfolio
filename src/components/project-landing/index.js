import React from 'react';
import Image from 'gatsby-image';

import projectLandingStyles from './project-landing.module.scss';

export default function ProjectLanding({ project }) {
  const { title, descShort, image, tags, colorDark, link, repo } = project;
  return (
    <div 
      className={projectLandingStyles.wrapper}
      style={{backgroundColor: colorDark}}
    >
      <div className={projectLandingStyles.tags}>
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
      <h1 className={projectLandingStyles.heading}>
        {title}
      </h1>
      <div className={projectLandingStyles.imageContainer}>
        <Image 
          fluid={image.childImageSharp.fluid}
          className={projectLandingStyles.image}
          alt="main image"
        />
      </div>
      <div className={projectLandingStyles.body} dangerouslySetInnerHTML={{__html: descShort}} />
      <div>
        { link ? (
          <a href={link} className="btn btn-primary-dark">Launch Application</a>
        ) : ('') }
        <a href={repo} className="btn btn-secondary-dark">View Repo</a>
      </div>
    </div>
  )
}
