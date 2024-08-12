import { useState } from 'react'
import './App.css'
import RandomUser from './components/RandomUser'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RandomJokes from './components/RandomJokes';

function App() {


  return (
    <Router>
        <Routes>
          <Route path="/" element={<RandomUser />} />
          <Route path="/random-jokes" element={<RandomJokes />} />
          <Route path="/random-user" element={<RandomUser />} />
        </Routes>
    </Router>
  )
}

export default App
