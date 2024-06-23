import React from 'react';
import { Link } from 'react-router-dom';

const tutorials = [
  { id: 1, title: 'Tema 1', image: 'https://via.placeholder.com/200', description: 'Descripción del Tema 1' },
  { id: 2, title: 'Tema 2', image: 'https://via.placeholder.com/200', description: 'Descripción del Tema 2' },
  { id: 3, title: 'Tema 3', image: 'https://via.placeholder.com/200', description: 'Descripción del Tema 3' },
];

const Tutorials = () => {
  return (
    <section className="section tutorials">
      {tutorials.map(tutorial => (
        <Link to={`/tutorial/${tutorial.id}`} key={tutorial.id} className="tutorial">
          <img src={tutorial.image} alt={tutorial.title} />
          <div className="tutorial-title">
            <h3>{tutorial.title}</h3>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Tutorials;