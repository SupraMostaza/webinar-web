import React from 'react';
import { useParams } from 'react-router-dom';

const tutorials = [
  { id: 1, title: 'Tema 1', description: 'Descripción del Tema 1' },
  { id: 2, title: 'Tema 2', description: 'Descripción del Tema 2' },
  { id: 3, title: 'Tema 3', description: 'Descripción del Tema 3' },
];

const TutorialDetail = () => {
  const { id } = useParams();
  const tutorial = tutorial.find(t => t.id === parseInt(id));

  if (!tutorial) {
    return <h2>Tema no encontrado</h2>;
  }

  return (
    <section className="section">
      <h2>{tutorial.title}</h2>
      <p>{tutorial.description}</p>
    </section>
  );
};

export default TutorialDetail;