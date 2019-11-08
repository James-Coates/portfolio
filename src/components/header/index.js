import React, { useState } from "react";
import { Link } from 'gatsby';

import headerStyles from './header-styles.module.scss';

const Header = ({ menuActive, setMenuActive }) => {
  const [ active, setActive ] = useState(false);
  console.log(menuActive);
  return (
  <header className={headerStyles.container}>
    <Link to="/">
      <h1 className={headerStyles.logo}>James Coates</h1>
    </Link>
    <div className={headerStyles.nav}>
      <Link to="#">About</Link>
      <Link to="#">Portfolio</Link>
      <Link to="#">Contact</Link>
    </div>
    <div 
      className={`${headerStyles.menu} ${active ? headerStyles.active : null}`} 
      onClick={() => setActive(!active)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  </header>
)}

export default Header
