import Card from "../components/produtos/Card"
import { CakesJson } from "../data/CakesJson"
import "./index.css"

export default function Cakes({ search }) {
    const lowerSearch = search.toLowerCase()

    const CakesFiltered = CakesJson.filter(bolo => bolo.name.toLowerCase().includes(lowerSearch))

    return (
        <>
            <div className="title-container">
                <h3 className="title">Bolos da cris</h3>
            </div>
            <div className="cakes">
                {CakesFiltered.map((bolo, i) => (
                    <Card key={i} food={bolo} />
                ))}
            </div>
        </>
    )
}