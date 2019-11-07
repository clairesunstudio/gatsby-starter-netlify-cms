import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Row, Col, Container } from 'react-bootstrap'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Masonry from '../components/Masonry'
import Divider from '../components/Divider'

export const IndexPageTemplate = ({ group: tags }) => (
  <Fragment>
    <Masonry tags={tags} />
  </Fragment>
)

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { tags } = data

  return (
    <Layout>
      <IndexPageTemplate {...tags} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        intro {
          heading
          description
        }
      }
    }
    tags: allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
