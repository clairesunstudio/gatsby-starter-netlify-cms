import React from 'react';
import { Button, Card } from 'react-bootstrap'
import { Link } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

const ProjectCard = ({ title, text, button, image }) => {
  return (
      <Card style={{ width: '22rem' }}>
        { image && <PreviewCompatibleImage imageInfo={image} />}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          { button && <Link to={button.link} variant="primary">{button.text}</Link>}
        </Card.Body>
      </Card>
    )
}

export default ProjectCard
