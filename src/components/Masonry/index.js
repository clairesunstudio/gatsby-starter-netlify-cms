import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, a } from 'react-spring'
import shuffle from 'lodash/shuffle'
import useMeasure from './useMeasure'
import useMedia from './useMedia'
import { Link, graphql, StaticQuery } from 'gatsby'
import ProjectCard, { cardWidth } from '../ProjectCard'
// import data from './data'
import './index.scss'

const Masonry = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  // Hook1: Tie media queries to the number of columns
  const columns = useMedia([
    `(min-width: ${cardWidth * 5}px)`,
    `(min-width: ${cardWidth * 4}px)`, 
    `(min-width: ${cardWidth * 3}px)`,
    `(min-width: ${cardWidth * 2}px)`],
    [5, 4, 3, 2], 1
  )
  // Hook2: Measure the width of the container element
  const [bind, { width }] = useMeasure()
  // Hook3: Hold items
  const [items, set] = useState(posts)
  // Hook4: shuffle data every 2 seconds
  // useEffect(() => void setInterval(() => set(shuffle), 2000), [])
  // Form a grid of stacked items using width & columns we got from hooks 1 & 2
  let heights = new Array(columns).fill(0) // Each column gets a height starting with zero
  let gridItems = items.map(({ node: item }, i) => {
    const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const columnWidth = width / columns;
    const rowHeight = 400;
    const xy = [columnWidth * column, (heights[column] += rowHeight) - rowHeight] // X = container width / number of columns * column index, Y = it's just the height of the current column
    return { ...item, xy, width: columnWidth, height: rowHeight  }
  })

  // Hook5: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, item => item.id, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25
  })
  console.log(transitions)
  // Render the grid
  return (
    <div {...bind} class="masonry" style={{ height: Math.max(...heights) }}>
      {transitions.map(({ item, props: { xy, ...rest }, key }) => {
        return(<a.div key={key} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}>
          <ProjectCard title={item.frontmatter.title} text={item.frontmatter.description} image={item.frontmatter.image} button={{ link: item.fields.slug, text: 'Learn More'}}/>

        </a.div>)
      })}
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "project" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                description
                image {
                  childImageSharp {
                    fluid(maxWidth: 240, quality: 64) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Masonry data={data} />}
  />
)
