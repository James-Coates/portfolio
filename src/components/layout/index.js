import React, { useState } from "react"
import Helmet from "react-helmet";

import SEO from "../seo"
import Header from '../header';
import MenuScreen from '../menu-screen';
import Footer from '../footer';

const Layout = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <main>
      <SEO title="Home" />
      <Helmet>
        <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet"/>
      </Helmet>
      <Header menuActive={menuActive} setMenuActive={setMenuActive}/>
      <MenuScreen menuActive={menuActive} />
      {children}
      <Footer />
    </main>
  )
};

export default Layout;
