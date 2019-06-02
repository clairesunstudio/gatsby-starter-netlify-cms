import React from 'react'
import { Col, Button, Row, Container } from 'react-bootstrap'
import './index.scss'


const Header = ({ title,subtitle, href }) => (
    <header>
      <Container>
        <Row>
          <Col md={8}>
            <h1>{title}</h1>
            <hr />
            <h3>{subtitle}</h3>
            { href && href !== "" && (
              <Button variant="outline-dark" href={href}>Visit Live Site</Button>
            )}
          </Col>
        </Row>
      </Container>
    </header>
);

export default Header
