import { useState } from "react"
import Card from "../components/produtos/Card"
import { PaesJson } from "../components/produtos/PaesJson"
import "./index.css"

export default function Paes() {
    const [search, setSearch] = useState("")
    const lowerSearch = search.toLowerCase()
    function handleGetInputValue(e) {
        setSearch(e.target.value)
    }
    const PaesFiltrados = PaesJson.filter(paes => paes.name.toLowerCase().includes(lowerSearch))

    return (
        <>
            <h1 className="title">Pães</h1>
            <div className="container-pesquisa">
                <input type="text" autoComplete="off" className="search-input" placeholder="Pesquisa" value={search} onChange={handleGetInputValue} />
            </div>
            <div className="paes">
                {PaesFiltrados.map((paes, i) => (
                    <Card key={i} price={paes.price} name={paes.name} img={paes.img} />
                ))}
            </div>
        </>
    )
}