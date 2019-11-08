import React from "react";
import {Link} from "gatsby";

import moreProjectsStyles from './more-projects-styles.module.scss';

const MoreProjects = () => {
  return (
    <section className={moreProjectsStyles.section} id="about">
      <Link to="projects" className={moreProjectsStyles.link}>
        <p>More Projects</p>
        <div></div>
      </Link>
    </section>
  );
}

export default MoreProjects;
