import './App.css'
import RandomUser from './components/RandomUser'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RandomJokes from './components/RandomJokes';
import CatListings from './components/CatListings.jsx';

function App() {


  return (
    <Router>
        <Routes>
          <Route path="/" element={<RandomUser />} />
          <Route path="/random-jokes" element={<RandomJokes />} />
          <Route path="/random-user" element={<RandomUser />} />
          <Route path="/cats-listing" element={<CatListings />} />
        </Routes>
    </Router>
  )
}

export default App
