
import { Routes, Route, Link } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Continentes from "./pages/Continentes"
import Personaje from "./pages/Personaje"


function App() {
  

  return (
    <div className="App">

      <header className="header">
        <Link to="/">Ir a Home</Link> <br />
        <Link to="/continentes">Ir a Continentes</Link>
      </header>

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/continentes" element={ <Continentes /> } />
        <Route path="/personaje/:id" element={ <Personaje /> } />
      </Routes>
    </div>
  )
}

export default App
