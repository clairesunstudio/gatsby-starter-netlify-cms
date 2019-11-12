import React from 'react'
import { Link } from 'gatsby'
import { Col, Row, Container } from 'react-bootstrap'
import Icon from '../Icon'

import './index.scss'

const chevronSize = {
  svgWidth: 11,
  svgHeight: 16
}

const svgSize = {
  svgWidth: 20,
  svgHeight: 20
}

const Pager = ({ left, right }) => {
  return (
    <Container>
      <Row className="pagers">
        <Col>
          <Link to={left.slug}>
            <Icon name='chevron-left' {...chevronSize} />
            {left.title}
          </Link>
        </Col>
        <Col>
          <Link >
            <Icon name='grid-three-up' {...svgSize}/>
          </Link>
        </Col>
        <Col>
          <Link to={right.slug}>
            {right.title}
            <Icon name='chevron-right' {...chevronSize}/>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Pager
