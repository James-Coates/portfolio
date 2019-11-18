import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import portfolioItemStyles from './portfolio-item-styles.module.scss';

const PortfolioItem = ({ project }) => {
  const { rows, cols } = project.gridSpan;
  const { title, tags, slug, gridImage } = project;
  const gridClass = `grid-row-span-${rows} grid-column-span-${cols}`;
  const image = require(`../../images/${gridImage.relativePath}`);

  return (
    <Link className={`${portfolioItemStyles.item} ${gridClass}`} to={`/projects/${slug}`}>
      <img src={image} className={portfolioItemStyles.img} alt={title} />
      <div className={portfolioItemStyles.info}>
        <h3 className={portfolioItemStyles.title}>{title}</h3>
        <div className={portfolioItemStyles.tags}>
          {tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
      </div>
    </Link>
  );
};

PortfolioItem.propTypes = {

}

export default PortfolioItem;
