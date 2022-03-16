import { useState } from "react"
import BolosCard from "../components/bolos/BolosCard"
import { BolosJson } from "../components/bolos/BolosJson"
import "./index.css"

export default function Bolos() {
    const[search, setSearch] = useState("")
    const lowerSearch = search.toLowerCase()
    function handleGetInputValue(e) {
        setSearch(e.target.value)
    }
     const BolosFiltrados = BolosJson.filter(bolo => bolo.name.toLowerCase().includes(lowerSearch))
     
    return(
    <>
    <h1>Bolos</h1>
    <div className="container-pesquisa">
        <input type="text" id="pesquisar" autoComplete="off" placeholder="Pesquisa" value={search} onChange={handleGetInputValue}/>
    </div>
    <div className="bolos">
    {BolosFiltrados.map((bolo, i) => (
        <BolosCard key={i} price={bolo.price} name={bolo.name} img={bolo.img}/>
        ))}
    </div>
    </>
    )
}