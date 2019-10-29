import React from "react";

import workItemStyles from './work-item-styles.module.scss';

const WorkItem = ({ project }) => {
  const { title, tags } = project;
return (
  <div className={workItemStyles.container}>
    <div className={workItemStyles.imageContainer}>
      <img src=""/>
    </div>
    <div className={workItemStyles.body}>
      <div className={workItemStyles.tags}>
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
      <h1 className={workItemStyles.title}>{title}</h1>
      <button className={`btn btn-secondary-dark ${workItemStyles.btn}`}>Find Out More</button>
    </div>
  </div>
)
};

export default WorkItem;
