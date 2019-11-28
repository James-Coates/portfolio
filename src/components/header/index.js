/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { Link, withPrefix } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faMediumM } from '@fortawesome/free-brands-svg-icons';

import logo from '../../images/logo.svg';

import headerStyles from './header-styles.module.scss';

const Header = ({ menuActive, setMenuActive, contactActive, setContactActive }) => {
  return (
    <header className={`${headerStyles.container} ${menuActive ? 'fixed' : null}`}>
      <Link to="/">
        <img src={logo} className={headerStyles.logo} />
      </Link>
      <div className={headerStyles.nav}>
        <div className={headerStyles.links}>
          <Link to="/#about">About</Link>
          <Link to="/#portfolio">Portfolio</Link>
          <button onClick={() => setContactActive(!contactActive)} type="button">Contact</button>
        </div>
        <div className={headerStyles.social}>
          <a href="https://twitter.com/_JamesCoates" target="blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://github.com/James-Coates" target="blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://medium.com/@jamescoates192" target="blank">
            <FontAwesomeIcon icon={faMediumM} />
          </a>
          <a
            href={withPrefix('/Coates-James-Resume.pdf')}
            className="btn btn-secondary"
            target="blank"
          >
            Resume
          </a>
        </div>
      </div>
      <div
        className={`${headerStyles.menu} ${menuActive ? headerStyles.active : null}`}
        onClick={() => setMenuActive(!menuActive)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
