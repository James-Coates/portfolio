import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from '../paragraph';
import PortfolioGrid from '../portfolio-grid';
import FeaturedWork from '../featured-work';

import portfolioStyles from './portfolio-styles.module.scss';

const Portfolio = props => {
  return (
    <section className={`pt-lg ${portfolioStyles.wrapper}`} id="portfolio">
      <div className={portfolioStyles.container}>
        <div className={portfolioStyles.header}>
          <h1 className="heading-lg">Selected Work</h1>
          <p>A selection from the latest things I’ve built</p>
        </div>
        <PortfolioGrid />
      </div>
    </section>
  );
};

Portfolio.propTypes = {
};

export default Portfolio;
