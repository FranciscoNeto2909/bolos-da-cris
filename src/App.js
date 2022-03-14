import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/navBar';
import Inicio from "./pages/Inicio"
import Bolos from "./pages/Bolos"
import Paes from './pages/Paes';
import Sobre from './pages/Sobre';

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/bolos' element={<Bolos/>}/>
        <Route path='/paes' element={<Paes/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
      </Routes>
    </div>
  );
}

