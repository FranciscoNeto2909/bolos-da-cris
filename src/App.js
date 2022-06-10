import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/navBar';
import Inicio from "./pages/Inicio"
import Bolos from "./pages/Bolos"
import Paes from './pages/Paes';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/bolos' element={<Bolos/>}/>
        <Route path='/paes' element={<Paes/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

