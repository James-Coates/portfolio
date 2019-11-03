import React from 'react';

import projectObjectiveStyles from './project-objective.module.scss';

export default function ProjectObjective({ project }) {
  const { objective } = project;
  return (
    <div className={projectObjectiveStyles.container}>
      <h1 className={projectObjectiveStyles.heading}>Objective</h1>
      <div className={projectObjectiveStyles.body} dangerouslySetInnerHTML={{__html: objective}} />
    </div>
  )
}
