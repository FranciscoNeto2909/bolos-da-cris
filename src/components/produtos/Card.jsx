import { useState } from "react"
import "./card.css"

export default function Card({ food }) {

    const [size, setSize] = useState("")

    function handleChoosePrice() {
        if (food.sizes === 2) {
            if (size === "G") {
                return food.priceG
            } else {
                return food.price
            }
        } else {
            return food.price
        }
    }

    return (
        <div className="card">
            <h3 className="card-title">{food.name}</h3>
            <img src={food.img} alt="food" className="card-img" />
            <div className="card-info">
                {food.sizes === 2 &&
                    <select className="card-sizes"
                        onChange={e => setSize(e.target.value)}>
                        <option value="M">M</option>
                        <option value="G">G</option>
                    </select>}
                <p className="card-price">R$:{handleChoosePrice()}</p>
                <a className="btn-requests" href={`https://wa.me/5585999614992?text=Olá%20eu%20gostaria%20de%20pedir%20um%20${food.name} ${size === "M"? "medio" : "" || size === "G"? "grande" : "" }`}>Request</a>
            </div>
        </div>
    )
}