import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';

const Photo = ({ data, rehyped }) => {
  console.log(data)
  console.log(rehyped)
  return(<div />)
  // return (
  //   <Img
  //     fluid={props}
  //     style={{
  //       maxWidth: props.presentationWidth,
  //       margin: '0 auto',
  //     }}
  //   />
  // );
};

export default ({ rehyped }) => {
  const data = useStaticQuery(graphql`
    query MQuery {
      imageSharp(fixed: {src: {regex: ${`/.*chapter55.jpg/`}}}) {
        internal {
          content
          description
          ignoreType
          mediaType
        }
        fluid {
          src
        }
        fixed {
          src
        }
      }
    }
  `)
  return (
    <Photo data={data} rehyped={rehyped} />
  )
}

// export default ({ rehyped }) => (
//   <StaticQuery
//     query={graphql`{
//       imageSharp(fixed: {src: {regex: ${`/.*chapter55.jpg/`}}}) {
//         internal {
//           content
//           description
//           ignoreType
//           mediaType
//         }
//         fluid {
//           src
//         }
//         fixed {
//           src
//         }
//       }
//     }
//
//     `}
//     render={(data) => <Photo data={data} rehyped={rehyped} />}
//   />
// )
