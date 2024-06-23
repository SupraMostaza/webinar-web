import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Topics from './components/Topics';
import Form from './components/Form';
import TopicDetail from './components/TopicDetail';
import Tutorials from './components/Tutorials';
import TutorialDetail from './components/TutorialDetail';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <h2>Conoce nuestro proceso</h2>
            <Topics />
            <h2>Registrate y no te pierdas del webinar</h2>
            <Form />
            <h2>Mira el paso a paso sobre cómo se hizo esta web</h2>
            <Tutorials />
          </>
        } />
        <Route path="/topic/:id" element={<TopicDetail />} />
        <Route path="/tutorial/:id" element={<TutorialDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
