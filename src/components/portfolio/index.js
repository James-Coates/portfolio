import React from 'react';
import PropTypes from 'prop-types';

import PortfolioGrid from '../portfolio-grid';

import portfolioStyles from './portfolio-styles.module.scss';

const Portfolio = props => {
  return (
    <section className={portfolioStyles.wrapper} id="portfolio">
      <div className={portfolioStyles.container}>
        <h1 className={portfolioStyles.heading}>Portfolio</h1>
        <PortfolioGrid />
      </div>
    </section>
  );
};

Portfolio.propTypes = {
};

export default Portfolio;
