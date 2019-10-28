import React from "react"

import FeatureProject from '../feature-project';

import featuredWorkStyles from './featured-work-styles.module.scss';

const FeaturedWork = () => (
  <section className={featuredWorkStyles.section} id="featured-work">
    <div className={featuredWorkStyles.container}>
      <div className="col-sm-100 col-lg-60">
        <h3 className={featuredWorkStyles.heading}>
          Featured Work
        </h3>
        <p className={featuredWorkStyles.subHeading}>
          A selection of my latest and most exciting work.
        </p>
      </div>
    </div>
    <FeatureProject color={'#6C28C9'}/>
    <FeatureProject color={'#EB5B76'}/>
  </section>
)

export default FeaturedWork
