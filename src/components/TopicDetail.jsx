import React from 'react';
import { useParams } from 'react-router-dom';
import { topics } from '../topicsData';

const TopicDetail = () => {
  const { id } = useParams();
  const topic = topics.find(t => t.id === parseInt(id));

  if (!topic) {
    return <h2>Tema no encontrado</h2>;
  }

  return (
    <section className="section">
      <div dangerouslySetInnerHTML={{ __html: topic.longDescription }} />
    </section>
  );
};

export default TopicDetail;

