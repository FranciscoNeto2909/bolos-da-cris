import { useState } from "react"
import Card from "../components/produtos/Card"
import { BolosJson } from "../components/produtos/BolosJson"
import "./index.css"

export default function Bolos() {
    const [search, setSearch] = useState("")
    const lowerSearch = search.toLowerCase()
    function handleGetInputValue(e) {
        setSearch(e.target.value)
    }
    const BolosFiltrados = BolosJson.filter(bolo => bolo.name.toLowerCase().includes(lowerSearch))

    return (
        <>
            <h1 className="title">Bolos</h1>
            <div className="container-pesquisa">
                <input type="text" autoComplete="off" className="search-input" placeholder="Pesquisa" value={search} onChange={handleGetInputValue} />
            </div>
            <div className="bolos">
                {BolosFiltrados.map((bolo, i) => (
                    <Card key={i} food={bolo} />
                ))}
            </div>
        </>
    )
}