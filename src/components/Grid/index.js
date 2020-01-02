import React from 'react';

const getGridStyle = (col) => ({
  display: 'grid',
  margin: '2rem 0',
  gridColumnGap: '50px',
  gridTemplateColumns: `repeat(${col || 2}, auto)`,
})

const GridComponent = (props) => (
  <div className='grid' style={getGridStyle(props.col)}>
    {props.children}
  </div>
);

export default GridComponent;
