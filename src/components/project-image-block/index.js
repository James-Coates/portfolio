import React from 'react';
import PropTypes from 'prop-types';

import projectImageBlockStyles from './project-image-block-styles.module.scss';

const index = ({ images }) => {
  return (
    <div className={projectImageBlockStyles.wrapper}>
      <div className={projectImageBlockStyles.container}>
        <div className={projectImageBlockStyles.row}>
          {images.row1.map((image) => (
            <div key={image.name}>
              <img src={image.path} alt={image.name} />
            </div>
          ))}
        </div>
        {images.row2 ? (
          <div className={projectImageBlockStyles.row}>
            {images.row2.map((image) => (
              <div key={image.name}>
                <img src={image.path} alt={image.name} />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

index.propTypes = {

};

export default index;
