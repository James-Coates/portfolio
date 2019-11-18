import React, { useState } from 'react';

import SEO from '../seo';
import Header from '../header';
import Menu from '../menu';
import Footer from '../footer';

const Layout = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <main>
      <SEO title="Home" />
      <Header menuActive={menuActive} setMenuActive={setMenuActive} />
      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
