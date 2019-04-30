import React from 'react'
import { Col, Button, Row, Container } from 'react-bootstrap'
import './index.scss'


const LiveSite = ({live_site}) => {
  if (live_site != "") {
    return <Button className="btn-project" href={live_site}>Visit Live Site</Button>
  } else {
    return null
  }
}

const Header = ({title,subtitle, live_site}) => (
    <header>
      <Container>
        <Row>
          <Col md={8}>
            <h1>{title}</h1>
            <hr />
            <h3>{subtitle}</h3>
            <LiveSite live_site={live_site} />
          </Col>
        </Row>
      </Container>
    </header>
);

export default Header
