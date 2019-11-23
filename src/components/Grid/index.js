import React from 'react';
import Img from 'gatsby-image';

const GridComponent = props => (
  <div className='grid'>
    {props.children.filter(child => child !== '\n').map(child => (
      <Img fluid={JSON.parse(child.props.rehyped)} />
    ))}
  </div>
);

export default GridComponent;
