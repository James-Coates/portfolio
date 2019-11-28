import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ children, type }) => {
  return (
    <div className={type}>
      {children}
    </div>
  )
}

Paragraph.propTypes = {

}

export default Paragraph;
