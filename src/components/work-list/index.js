import React from "react";

import WorkItem from '../work-item';

import workListStyles from './work-list-styles.module.scss';

const projects = [
  {
    id: 'convo',
    title: 'CONVO',
    tags: ['Development', 'React Native', 'Mobile App'],
    mainImage: '../images/projects/convo/main.jpg'
  },
  {
    id: 'ello',
    title: 'ello*',
    tags: ['Development', 'React', 'PWA', 'TDD'],
    mainImage: '../images/projects/ello/main.png'
  },
  {
    id: 'flix',
    title: 'The FLIXdb',
    tags: ['Development', 'React', 'API'],
    mainImage: '../images/projects/flix/main.png'
  },
  {
    id: 'todo',
    title: 'Todo App',
    tags: ['Development', 'Vue'],
    mainImage: '/src/images/projects/todo/main.png'
  },
  {
    id: 'btcquiz',
    title: 'The Bitcoin Quiz App',
    tags: ['Development', 'Angular'],
    mainImage: '/src/images/projects/flix/main.png'
  },
  {
    id: 'pokedex',
    title: 'Pokedex',
    tags: ['Development', 'Javascript'],
    mainImage: '/src/images/projects/pokedex/main.jpg'
  },
];

const WorkList = () => (
  <div className={workListStyles.container}>
    {projects.map((project) => (
      <WorkItem project={project} key={project.id} />
    ))}
  </div>
);

export default WorkList
