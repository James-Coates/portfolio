import React from "react";

import pageHeaderStyles from './page-header-styles.module.scss';

const PageHeader = () => (
  <div className={pageHeaderStyles.container}>
    <h1 className={pageHeaderStyles.heading}>Work</h1>
    <p className={pageHeaderStyles.sub}>Some things I’ve built.</p>
  </div>
)

export default PageHeader
