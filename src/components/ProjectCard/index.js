import React from 'react';
import { Button, Card } from 'react-bootstrap'
import { Link, navigate } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

const ProjectCard = ({ title, text, button, image }) => {
  return (
      <Card style={{ width: '350px', margin: 'auto' }}
        onClick={(e) => navigate(button.link)}>
        { image && (
          <Link to={button.link}>
            <PreviewCompatibleImage imageInfo={image} />
          </Link>
        )}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default ProjectCard
