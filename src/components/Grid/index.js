import React from 'react';

const gridStyle = {
  display: 'grid',
  margin: '2rem 0',
  'grid-column-gap': '50px',
  'grid-template-columns': 'repeat(3, auto)',
}
const GridComponent = props => (
  <div className='grid' style={gridStyle}>
    {props.children}
  </div>
);

export default GridComponent;
