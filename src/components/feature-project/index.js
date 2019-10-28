import React from "react";

import featuredProjectStyles from './feature-project-styles.module.scss';

const FeaturedWork = ({ name, color }) => (
  <div 
    className={featuredProjectStyles.wrapper} 
    style={{backgroundColor: color}}
    id="featured-work"
  >
    <div className={featuredProjectStyles.container}>
      <div className="col-sm-100 col-lg-50">
        <img 
          className={featuredProjectStyles.image}
          src={require('../../images/mockup.png')}
        />
      </div>
      <div className="col-sm-100 col-lg-50">
        <div className={featuredProjectStyles.details}>
          <h3 className={featuredProjectStyles.title}>
            CONVO
          </h3>
          <p className={featuredProjectStyles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Cum sociis natoque penatibus et magnis 
          dis parturient.
          </p>
          <button className="btn btn-secondary-dark">Find out more</button>
        </div>
      </div>
    </div>
  </div>
)

export default FeaturedWork
