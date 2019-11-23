import React, { Component } from 'react'
import Lightbox from 'react-images';
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import { Col } from 'react-bootstrap'

class LightBox extends Component {
  constructor(props) {
    super(props);
    console.log(props.data)
    this.state = {
      shareOpen: false,
      anchorEl: null,
      lightbox: false,
      photos: JSON.parse(props.images).map(image => Object.assign({ src: image })),
      photo: 0
    };
  }

  gotoPrevLightboxImage() {
    const { photo } = this.state;
    this.setState({ photo: photo - 1 });
  }

  gotoNextLightboxImage() {
    const { photo } = this.state;
    this.setState({ photo: photo + 1 });
  }

  openLightbox(photo, event) {
    event.preventDefault();
    this.setState({ lightbox: true, photo });
  }

  closeLightbox() {
    this.setState({ lightbox: false });
  }

  render() {
    const { images } = this.props;
    console.log(images)
    return (
      <div>
        <Col md={8} className="media">
          {images.map((image, i) => (
            <Col md={6} key={`image_+${i}`}>
              <a href={image.src} onClick={() => this.openLightbox(i)}>
                <img src={'/img'}/>
              </a>
            </Col>
          ))}
        </Col>
        <Lightbox
          backdropClosesModal
          images={this.state.photos}
          currentImage={this.state.photo}
          isOpen={this.state.lightbox}
          onClickPrev={() => this.gotoPrevLightboxImage()}
          onClickNext={() => this.gotoNextLightboxImage()}
          onClose={() => this.closeLightbox()}
        />
      </div>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query ImagesQuery {
        allImageSharp {
          edges {
            node {
              parent {
                ... on File {
                  id
                  name
                  relativePath
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
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
    render={(data) => <LightBox data={data} />}
  />
)
