import { useState } from "react"
import Card from "../components/produtos/Card"
import { BreadsJson } from "../components/produtos/BreadsJson"
import "./index.css"

export default function Breads() {
    const [search, setSearch] = useState("")
    const lowerSearch = search.toLowerCase()
    function handleGetInputValue(e) {
        setSearch(e.target.value)
    }
    const BreadsFiltered = BreadsJson.filter(bread => bread.name.toLowerCase().includes(lowerSearch))

    return (
        <>
            <h1 className="title">Breads</h1>
            <div className="container-search">
                <input type="text" autoComplete="off" className="search-input" placeholder="Search" value={search} onChange={handleGetInputValue} />
            </div>
            <div className="bread">
                {BreadsFiltered.map((bread, i) => (
                    <Card key={i} food={bread} />
                ))}
            </div>
        </>
    )
}