import React from 'react'
import SocialMedia from '../SocialMedia'
import { Col, Row, Container } from 'react-bootstrap'

import './index.scss'

class Footer extends React.Component{
  render = () =>  {
    const socialIconStyle ={
      width:30,height:30, margin:3
    }
    const socialIconColor = "#fff"
    return (
      <footer>
        <Container>
          <Row>
            <Col sm={6}>
              <p><strong>© 2017 Claire Sun Studio </strong></p>
            </Col>
            <Col sm={6}>
              <SocialMedia socialIconStyle={socialIconStyle} socialIconColor={socialIconColor}/>
            </Col>
          </Row>
        </Container>
      </footer>

    );
  };
}

export default Footer
