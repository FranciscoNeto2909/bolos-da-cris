import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/navBar';
import Bolos from "./pages/Bolos"
import Paes from './pages/Paes';
import NotFound from './pages/NotFound';
import { useState } from 'react';

export default function App() {
  const [search, setSearch] = useState("")
  function handleSearch(e) {
    setSearch(e.target.value)
  }
  return (
    <div className="App">
      <NavBar search={search} handleSearch={handleSearch} />
      <Routes>
        <Route path='/' element={<Bolos search={search} />} />
        <Route path='/paes' element={<Paes search={search} />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

