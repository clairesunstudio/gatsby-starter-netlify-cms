import React from 'react';
import { Button, Card } from 'react-bootstrap'
import { Link } from 'gatsby'

const ProjectCard = ({ title, text, buttonText }) => {
  return (
      <Card style={{ width: '22rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <Button variant="primary">{buttonText}</Button>
        </Card.Body>
      </Card>
    )
}

export default ProjectCard
