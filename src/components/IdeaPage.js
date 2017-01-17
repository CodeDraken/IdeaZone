import React from 'react';

import ProjectInfo from './ProjectInfo';
import ExampleSlider from './ExampleSlider';
import TutorialSection from './TutorialSection';

const IdeaPage = () => {
  return (
    <div className="container">
      <ProjectInfo />
      <ExampleSlider />
      <TutorialSection />
    </div>
  )
}

export default IdeaPage;