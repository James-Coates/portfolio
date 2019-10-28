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
        <Link to="#">
          <p className={`${MenuScreenStyles.menuItem} ${menuActive ? MenuScreenStyles.itemActive : null}`}>About</p>
        </Link>
        <Link to="#">
          <p className={`${MenuScreenStyles.menuItem} ${menuActive ? MenuScreenStyles.itemActive : null}`}>Work</p>
        </Link>
        <Link to="#">
          <p className={`${MenuScreenStyles.menuItem} ${menuActive ? MenuScreenStyles.itemActive : null}`}>Contact</p>
        </Link>
      </div>
      <div className={MenuScreenStyles.social}>
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faMediumM} />
      </div>
    </div>
    <div className={MenuScreenStyles.col2}>
      <h1 className={MenuScreenStyles.name}>James Coates</h1>
    </div>
  </div>
)}

export default MenuScreen
