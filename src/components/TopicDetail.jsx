import React from 'react';
import { useParams } from 'react-router-dom';

const topics = [
  { id: 1, title: 'Tema 1', description: 'Descripción del Tema 1' },
  { id: 2, title: 'Tema 2', description: 'Descripción del Tema 2' },
  { id: 3, title: 'Tema 3', description: 'Descripción del Tema 3' },
];

const TopicDetail = () => {
  const { id } = useParams();
  const topic = topics.find(t => t.id === parseInt(id));

  if (!topic) {
    return <h2>Tema no encontrado</h2>;
  }

  return (
    <section className="section">
      <h2>{topic.title}</h2>
      <p>{topic.description}</p>
    </section>
  );
};

export default TopicDetail;