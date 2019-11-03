import React from "react";
import { Link } from "gatsby";
import Image from 'gatsby-image';

import workItemStyles from './work-item-styles.module.scss';

const WorkItem = ({ project }) => {
  const { title, tags, colorDark, image, slug } = project;
return (
  <div className={workItemStyles.container} style={{backgroundColor: colorDark}}>
    <Link className={workItemStyles.link} to={`/projects/${slug}`}>
      <div className={workItemStyles.imageContainer}>
        <Image 
          fluid={image.childImageSharp.fluid} 
          alt={title}
          className={workItemStyles.image}
        />
      </div>
      <div className={workItemStyles.body}>
        <div className={workItemStyles.tags}>
          {tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
        <h1 className={workItemStyles.title}>{title}</h1>
          <button className={`btn btn-primary-dark ${workItemStyles.btn}`}>Find Out More</button>
      </div>
    </Link>
  </div>
)
};

export default WorkItem;
