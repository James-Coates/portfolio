import React, { useState } from "react";
import { Link } from 'gatsby';

import headerStyles from './header-styles.module.scss';

const Header = ({ menuActive, setMenuActive, contactActive, setContactActive }) => {
  console.log(contactActive);
  return (
  <header className={`${headerStyles.container} ${menuActive ? 'fixed' : null}`}>
    <Link to="/">
      <h1 className={headerStyles.logo}>James Coates</h1>
    </Link>
    <div className={headerStyles.nav}>
      <Link to="/#about">About</Link>
      <Link to="/#portfolio">Portfolio</Link>
      <button onClick={() => setContactActive(!contactActive)} type="button">Contact</button>
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
