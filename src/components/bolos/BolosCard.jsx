import "./bolosCard.css"

export default function BolosCard({name, price, img}) {
    return(
        <div className="boloCard">
            <h3>{name}</h3>
            <img src={img} alt="bolo" className="boloCard-img"/>
             <div className="boloCard-info">
                <p className="boloCard-price">R$:{price}</p>
                <a className="btn-pedidos">Pedir</a>
             </div>
        </div>
    )
}