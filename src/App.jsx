import { useState } from 'react'
import './App.css'
import RandomUser from './components/RandomUser'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <Router>

        {/* Routing configuration */}
        <Routes>
          <Route path="/" element={<RandomUser />} />
          <Route path="/random-user" element={<RandomUser />} />
        </Routes>
    </Router>
  )
}

export default App
