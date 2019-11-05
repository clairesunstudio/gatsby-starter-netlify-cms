import React from 'react';
import { Button, Card } from 'react-bootstrap'
import { Link, navigate } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import './index.scss'

export const cardWidth = 350;
export const cardPadding = 5;

const ProjectCard = ({ title, text, button, image }) => {
  return (
      <Card
        style={{ width: `${cardWidth}px` }}
        onClick={() => navigate(button.link)}>
        { image && (
          <Link
            style={{ padding: `${cardPadding}px` }}
            to={button.link}
          >
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
