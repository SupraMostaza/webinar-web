import React from 'react';
import { useParams } from 'react-router-dom';
import { tutorials } from '../tutorialsData';


const TutorialDetail = () => {
  const { id } = useParams();
  const tutorial = tutorials.find(t => t.id === parseInt(id));

  return (
    <section className="section">
      <div dangerouslySetInnerHTML={{ __html: tutorial.longDescription }} />
    </section>
  );
};

export default TutorialDetail;