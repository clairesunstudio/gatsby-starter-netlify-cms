import React from 'react';
import { Button, Card } from 'react-bootstrap'
import { Link } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

const ProjectCard = ({ title, text, buttonText, image }) => {
  return (
      <Card style={{ width: '22rem' }}>
        <Card.Body>
          { image && <PreviewCompatibleImage imageInfo={image} />}
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          { buttonText && <Button variant="primary">{buttonText}</Button>}
        </Card.Body>
      </Card>
    )
}

export default ProjectCard
