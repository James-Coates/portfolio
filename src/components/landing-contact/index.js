import React from 'react';
import PropTypes from 'prop-types';

import landingContactStyles from './landing-contact-styles.module.scss';

const index = props => {
  return (
    <div className={landingContactStyles.wrapper}>
      <div className={landingContactStyles.container}>
        <div className={landingContactStyles.content}>
          <h1 className="heading-xl">Say Hi</h1>
          <p className="paragraph-lg">
            Any questions, work inquiries or anything else really, please don’t
            hesitate to get in touch.
          </p>
          <p className="paragraph-lg">
            I’m currently open to new projects, freelance work and full time positions.
          </p>
          <p className={landingContactStyles.label}>
            Email
          </p>
          <p className={`paragraph-lg ${landingContactStyles.email}`}>
            <a href="mailto:james.coates@me.com">
              james.coates@me.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

index.propTypes = {

}

export default index;
