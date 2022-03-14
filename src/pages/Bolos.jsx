import BolosCard from "../components/bolos/BolosCard"
import { BolosJson } from "../components/bolos/BolosJson"
import "./index.css"

export default function Bolos() {
    return(
    <>
    <h1>Bolos</h1>
    <div className="bolos">
    {BolosJson.map(bolo => (
        <BolosCard price={bolo.price} name={bolo.name} img={bolo.img}/>
        ))}
    </div>
    </>
    )
}