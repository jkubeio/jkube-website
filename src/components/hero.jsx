import React from 'react';
import PropTypes from 'prop-types';
import {StaticImage} from 'gatsby-plugin-image';

import '../styles/components/hero.scss';

const baseClass = 'eclipse-jkube-hero';
export const Hero = ({children}) => {
  return (
    <div className={baseClass}>
      <div className={`${baseClass}__content`}>
        {children}
      </div>
      <div className={`${baseClass}__image`}>
        <StaticImage
          src='../assets/cubes-vert.jpg'
          className={`${baseClass}__image-wrapper-vertical`}
          objectPosition='center top'
          loading='eager'
          alt='A picture of multiple concrete cubes aligned in a grid'
        />
        <StaticImage
          src='../assets/cubes.jpg'
          className={`${baseClass}__image-wrapper-landscape`}
          objectPosition='center top'
          loading='eager'
          alt='A picture of multiple concrete cubes aligned in a grid'
        />
      </div>
    </div>
  );
};

Hero.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
