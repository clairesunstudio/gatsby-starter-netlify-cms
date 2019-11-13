import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, widgetFor, widgetsFor }) => {
  const info = widgetsFor('info').map((item) => ({
    icon: item.getIn(['data', 'icon']),
    href: item.getIn(['data', 'href']),
    text: item.getIn(['data', 'text'])
  }))

  return (
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
      job={entry.getIn(['data', 'job'])}
      blurb={entry.getIn(['data', 'blurb'])}
      info={info}
      name={entry.getIn(['data', 'name'])}
      description={entry.getIn(['data', 'description'])}
      image={entry.getIn(['data', 'image'])}
    />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
