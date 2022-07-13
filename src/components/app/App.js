import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../header/Header';
import MainPage from '../../pages/MainPage';
import ComicsPage from '../../pages/ComicsPage';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/comics' element={<ComicsPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
