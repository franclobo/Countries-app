import { BrowserRouter as Router } from 'react-router-dom'
import { Home } from './components/home'
import { Pages } from './components/pages'
import { DataProvider } from './context/dataProvider'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss'

function App() {

  return (
    <>
      <Router>
        <DataProvider>
          <Home />
          <Pages />
        </DataProvider>
      </Router>
    </>
  )
}

export default App
