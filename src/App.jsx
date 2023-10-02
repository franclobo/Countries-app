import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/home'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
