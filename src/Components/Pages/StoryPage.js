import React from 'react';
import "./StoryPage.css";
import Story from "../Pages/Story.js";
import Roadmap from '../roadmap/roadmap.js';

function StoryPage() {
  const divStyle = {
    backgroundImage: 'url("/images/back.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
  };

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    marginRight: '20px', // Adjust margin as needed
  };

  return (
    <div className="StoryPageContainer" style={divStyle}>
      <div className="StoryPageOverlay"></div>
      <img src="/images/page.png" alt="Page" style={imageStyle} />
      <Story />
      <Roadmap/>
    </div>
  );
}

export default StoryPage;
