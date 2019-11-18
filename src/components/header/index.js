import React, { useState } from "react";
import { Link } from 'gatsby';

import headerStyles from './header-styles.module.scss';

const Header = ({ menuActive, setMenuActive }) => {
  return (
  <header className={`${headerStyles.container} ${menuActive ? 'fixed' : null}`}>
    <Link to="/">
      <h1 className={headerStyles.logo}>James Coates</h1>
    </Link>
    <div className={headerStyles.nav}>
      <Link to="/#about">About</Link>
      <Link to="/#portfolio">Portfolio</Link>
      <Link to="/">Contact</Link>
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
)}

export default Header
