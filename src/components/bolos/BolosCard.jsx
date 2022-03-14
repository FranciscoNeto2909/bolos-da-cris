import "./bolosCard.css"

export default function BolosCard({name, price}) {
    return(
        <div className="boloCard">
            <h3>{name}</h3>
            <img src="#" alt="bolo" className="boloCard-img"/>
            <p className="boloCard-price">R$:{price}</p>
        </div>
    )
}