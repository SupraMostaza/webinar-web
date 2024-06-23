import React from 'react';
import { Link } from 'react-router-dom';

const topics = [
  { id: 1, title: 'Tema 1', image: 'https://via.placeholder.com/200', description: 'Descripción del Tema 1' },
  { id: 2, title: 'Tema 2', image: 'https://via.placeholder.com/200', description: 'Descripción del Tema 2' },
  { id: 3, title: 'Tema 3', image: 'https://via.placeholder.com/200', description: 'Descripción del Tema 3' },
];

const Topics = () => {
  return (
    <section className="section topics">
      {topics.map(topic => (
        <Link to={`/topic/${topic.id}`} key={topic.id} className="topic">
          <img src={topic.image} alt={topic.title} />
          <div className="topic-title">
            <h3>{topic.title}</h3>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Topics;