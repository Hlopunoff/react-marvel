import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../header/Header';
import MainPage from '../../pages/MainPage';
import ComicsPage from '../../pages/ComicsPage';
import NotFoundPage from '../../pages/NotFoundPage';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/comics' element={<ComicsPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
