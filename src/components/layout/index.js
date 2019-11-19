import React, { useState } from 'react';

import SEO from '../seo';
import Header from '../header';
import Menu from '../menu';
import Contact from '../contact';
import Footer from '../footer';

const Layout = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);
  return (
    <main className={menuActive || contactActive ? 'fixed' : ''}>
      <SEO title="Home" />
      <Header
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        contactActive={contactActive}
        setContactActive={setContactActive}
      />
      <Menu
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        contactActive={contactActive}
        setContactActive={setContactActive}
      />
      <Contact contactActive={contactActive} setContactActive={setContactActive} />
      {children}
      <Footer contactActive={contactActive} setContactActive={setContactActive} />
    </main>
  );
};

export default Layout;
