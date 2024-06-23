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
            <Topics />
            <Form />
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
