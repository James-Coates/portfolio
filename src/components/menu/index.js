import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faMediumM } from '@fortawesome/free-brands-svg-icons';

import menuStyles from './menu-styles.module.scss';

const index = ({menuActive, setMenuActive, contactActive, setContactActive}) => {
  return (
    <div className={`${menuActive ? 'show' : ''} ${menuStyles.wrapper}`}>
      <div className={menuStyles.links}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuActive(!menuActive)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/#about" onClick={() => setMenuActive(!menuActive)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/#portfolio" onClick={() => setMenuActive(!menuActive)}>
              Portfolio
            </Link>
          </li>
          <li>
            <button type="button" onClick={() => setContactActive(!contactActive)}>
              Contact
            </button>
          </li>
        </ul>
      </div>
      <div className={menuStyles.social}>
        <ul>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faMediumM} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

index.propTypes = {

}

export default index
