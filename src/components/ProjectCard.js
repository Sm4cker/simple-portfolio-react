import React from 'react';

const ProjectCard = ({ title, description }) => {
  return (
    <div style={cardStyle}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px',
  maxWidth: '300px',
  boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.1)'
};

export default ProjectCard;
