import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import portfolioItemStyles from './portfolio-item-styles.module.scss';

const PortfolioItem = ({ project }) => {
  const { rows, cols } = project.gridSpan;
  const { title, tags, slug, gridImage, rubric, overview, link, repo } = project;
  const gridClass = `grid-row-span-${rows} grid-column-span-${cols}`;
  // const image = require(`../../images/${gridImage.relativePath}`);

  return (
    <div className={`${portfolioItemStyles.item}`}>
      <Link to={`/projects/${slug}`} className={`${portfolioItemStyles.link}`} />
      <div className={portfolioItemStyles.img}>
        <Image fluid={gridImage.childImageSharp.fluid} alt={title} />
        <h3 className={`heading-md ${portfolioItemStyles.title}`}>{title}</h3>
      </div>
      <div className={portfolioItemStyles.content}>
        <div className={portfolioItemStyles.description}>
          <h3 className={`${portfolioItemStyles.rubric}`}>{rubric}</h3>
          <div dangerouslySetInnerHTML={{ __html: overview }} />
        </div>
        <div className={portfolioItemStyles.links}>
          <div className={portfolioItemStyles.external}>
            {link ? (
              <a href={link} target="blank">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            ) : ''}
            <a href={repo} target="blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <Link to={`/projects/${slug}`} className="btn btn-secondary">
            Read More
          </Link>
        </div>

        {/* <div className={portfolioItemStyles.tags}>
          {tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div> */}

      </div>
    </div>
  );
};

PortfolioItem.propTypes = {

}

export default PortfolioItem;
