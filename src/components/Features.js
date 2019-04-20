import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Card from './Card';

const FeatureGrid = ({ gridItems }) => {
  console.log(gridItems)
  return(
    <div className="columns is-multiline">
      {gridItems.map(item => (
        <Card imageInfo={item} />
      ))}
    </div>
  )
}

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
