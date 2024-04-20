// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components';

const sizes = {
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 480,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const accumulatorObj = Object.assign({}, accumulator);
  const emSize = sizes[label] / 16;
  accumulatorObj[label] = (...args) => css` @media (max-width: ${emSize}em) { ${css(...args)} }`;
  return accumulatorObj;
}, {});
