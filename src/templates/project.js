import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { Row, Col } from 'react-bootstrap'
import Layout from '../components/Layout'
import Pager from '../components/Pager'
import ProjectHeader from '../components/ProjectHeader'
import Content, { HTMLContent } from '../components/Content'
import './project.scss';

export const ProjectTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content
  const projectHeaderProps = {
    title,
    subtitle: description
  }
  return (
    <section className="section">
      {helmet || ''}
      <ProjectHeader {...projectHeaderProps}/>
      <div className="container content">
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link
                        className="filter-button btn btn-outline-primary"
                        to={`?tag=${encodeURIComponent(tag)}`}
                      >
                        {tag}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
    </section>
  )
}

ProjectTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Project = ({ data: { project, pagers } }) => {
  const pager = pagers.edges.find((pager) => pager.node.id === project.id);
  const pagerProps = {
    left: {
      slug: pager.previous.fields.slug,
      title: pager.previous.frontmatter.title
    },
    right: {
      slug: pager.next.fields.slug,
      title: pager.next.frontmatter.title
    }
  }
  return (
    <Layout>
      <ProjectTemplate
        content={project.html}
        contentComponent={HTMLContent}
        description={project.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${project.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${project.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={project.frontmatter.tags}
        title={project.frontmatter.title}
      />
      <section className="section">
        {
          <Pager {...pagerProps} />
        }
      </section>
    </Layout>
  )
}

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Project

export const pageQuery = graphql`
  query ProjectByID($id: String!) {
    project: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
    pagers: allMarkdownRemark {
      edges {
        node {
          id
        }
        next {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
        previous {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
