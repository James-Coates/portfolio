import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';

import ProjectBannerStyles from './project-banner-styles.module.scss';

const ProjectBanner = ({project}) => {
  const { banner } = project;
  return (
    <div className={ProjectBannerStyles.wrapper}>
      <div className={ProjectBannerStyles.container}>
        <Image fluid={banner.childImageSharp.fluid} />
      </div>
    </div>
  )
}

ProjectBanner.propTypes = {

}

export default ProjectBanner;
