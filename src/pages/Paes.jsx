import Card from "../components/produtos/Card"
import { BreadsJson } from "../components/produtos/BreadsJson"
import "./index.css"

export default function Breads({ search }) {
    const lowerSearch = search.toLowerCase()
    const BreadsFiltered = BreadsJson.filter(bread => bread.name.toLowerCase().includes(lowerSearch))

    return (
        <div className="bread">
            {BreadsFiltered.map((bread, i) => (
                <Card key={i} food={bread} />
            ))}
        </div>
    )
}