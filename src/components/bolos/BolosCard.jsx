import "./bolosCard.css"

export default function BolosCard({name, price, img}) {
    return(
        <div className="boloCard">
            <h3>{name}</h3>
            <img src={img} alt="bolo" className="boloCard-img"/>
             <div className="boloCard-info">
                <p className="boloCard-price">R$:{price}</p>
                <a className="btn-pedidos" href={`https://wa.me/5585997844445?text=Olá%20eu%20gostaria%20de%20pedir%20um%20${name}`}>Pedir</a>
             </div>
        </div>
    )
}