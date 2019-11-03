import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import testapp from '../../data/images/tech/react.svg';

import projectScreensStyles from './project-screens.module.scss';

export default function ProjectScreens ({ project }) {
  const { colorDark, tech, solution, mobileScreen, desktopScreen, link, repo, mobileOnly } = project;

  return (
    <div className={projectScreensStyles.wrapper}>
      <div className={projectScreensStyles.container}>
        <h1 className={projectScreensStyles.heading}>The Solution</h1>
        <div className={projectScreensStyles.body} dangerouslySetInnerHTML={{__html: solution}} />
        <div className={projectScreensStyles.body}>
          <div className={projectScreensStyles.tech}>
            <p>Built With</p>
            {tech.map(techEl => (
              <img 
                src={require(`../../data/images/tech/${techEl}.svg`)}
                key={techEl}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className={projectScreensStyles.screenWrapper}
        style={{backgroundColor: colorDark}}
      >
        <div className={projectScreensStyles.screenContainer}>
          <div className={projectScreensStyles.mobileContainer}>
            <div className={projectScreensStyles.mobile}>
              <Image fluid={mobileScreen.childImageSharp.fluid}/>
            </div>
          </div>
          {!mobileOnly ? (
            <div className={projectScreensStyles.desktopContainer}>
            <div className={projectScreensStyles.desktop}>
              <Image fluid={desktopScreen.childImageSharp.fluid}/>
            </div>
          </div>
          ) : ''}
        </div>
      </div>
      <div className={projectScreensStyles.container} style={{paddingTop: 150}}>
        <h1 className={projectScreensStyles.heading}>Check it out</h1>
        { link ? (
          <a href={link} className="btn btn-primary-light" target="blank">Launch Application</a>
        ) : ('') }
        <a className="btn btn-secondary-light" href={repo} target="blank">View Github Repo</a>
      </div>
    </div>
  )
}
