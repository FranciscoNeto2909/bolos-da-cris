import { useState } from "react"
import Card from "../components/produtos/Card"
import { CakesJson } from "../components/produtos/CakesJson"
import "./index.css"

export default function Cakes() {
    const [search, setSearch] = useState("")
    const lowerSearch = search.toLowerCase()
    function handleGetInputValue(e) {
        setSearch(e.target.value)
    }
    const CakesFiltered = CakesJson.filter(bolo => bolo.name.toLowerCase().includes(lowerSearch))

    return (
        <>
            <h1 className="title">Cakes</h1>
            <div className="container-search">
                <input type="text" autoComplete="off" className="search-input" placeholder="Search" value={search} onChange={handleGetInputValue} />
            </div>
            <div className="cakes">
                {CakesFiltered.map((bolo, i) => (
                    <Card key={i} food={bolo} />
                ))}
            </div>
        </>
    )
}