import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


import featuredWorkItemStyles from './featured-work-item-styles.module.scss';

import tester from '../../images/tester.png';

const FeaturedWorkItem = props => {
  return (
    <div className={featuredWorkItemStyles.container}>
      <div className={featuredWorkItemStyles.image}>
        <img src={tester} alt="project" />
      </div>
      <div className={featuredWorkItemStyles.content}>
        <h4 className="h-sm">Web App</h4>
        <h3 className="h-md">Flix</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <ul className={featuredWorkItemStyles.tags}>
          <li>React</li>
          <li>NodeJs</li>
        </ul>
        <div className={featuredWorkItemStyles.links}>
          <Link to="/">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>
      </div>
    </div>
  )
}

FeaturedWorkItem.propTypes = {

}

export default FeaturedWorkItem
