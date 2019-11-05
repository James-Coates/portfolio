import React from "react"
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faMediumM } from '@fortawesome/free-brands-svg-icons';

import MenuScreenStyles from './menu-screen-styles.module.scss';

const MenuScreen = ({ menuActive, setMenuActive }) => {
  return (
  // const [ active, setActive ] = useState(false);
  <div className={`${MenuScreenStyles.wrapper} ${menuActive ? MenuScreenStyles.menuActive : null}`}>
    <div className={MenuScreenStyles.col1}>
      <div className={MenuScreenStyles.nav}>
        <Link to="/#about" onClick={() => setMenuActive()}>
          <p className={`${MenuScreenStyles.menuItem} ${menuActive ? MenuScreenStyles.itemActive : null}`}>About</p>
        </Link>
        <Link to="/projects" onClick={() => setMenuActive()}>
          <p className={`${MenuScreenStyles.menuItem} ${menuActive ? MenuScreenStyles.itemActive : null}`}>Work</p>
        </Link>
        <Link to="/#contact" onClick={() => setMenuActive()}>
          <p className={`${MenuScreenStyles.menuItem} ${menuActive ? MenuScreenStyles.itemActive : null}`}>Contact</p>
        </Link>
      </div>
      <div className={MenuScreenStyles.social}>
        <a href="https://twitter.com/_JamesCoates" target="blank"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://github.com/James-Coates" target="blank"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://medium.com/@jamescoates192" target="blank"><FontAwesomeIcon icon={faMediumM} /></a>
      </div>
    </div>
    <div className={MenuScreenStyles.col2}>
      <h1 className={MenuScreenStyles.name}>James Coates</h1>
    </div>
  </div>
)}

export default MenuScreen
