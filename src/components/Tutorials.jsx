import React from 'react';
import { Link } from 'react-router-dom';
import { tutorials } from '../tutorialsData';

const Tutorials = () => {
  return (
    <section className="section tutorials">
      {tutorials.map(tutorial => (
        <Link to={`/tutorial/${tutorial.id}`} key={tutorial.id} className="tutorial">
          <img src={tutorial.image} alt={tutorial.title} />
          <div className="tutorial-title">
            <h3>{tutorial.title}</h3>
            <p>{tutorial.description}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Tutorials;