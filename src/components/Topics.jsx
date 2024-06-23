import React from 'react';
import { Link } from 'react-router-dom';
import { topics } from '../topicsData';

const Topics = () => {
  return (
    <section className="section topics">
      {topics.map(topic => (
        <Link to={`/topic/${topic.id}`} key={topic.id} className="topic">
          <img src={topic.image} alt={topic.title} />
          <div className="topic-title">
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Topics;
