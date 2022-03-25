import "./card.css"

export default function Card({name, price, img}) {
    return(
        <div className="card">
            <h3>{name}</h3>
            <img src={img} alt="bolo" className="card-img"/>
             <div className="card-info">
                <p className="card-price">R$:{price}</p>
                <a className="btn-pedidos" href={`https://wa.me/5585999614992?text=Olá%20eu%20gostaria%20de%20pedir%20um%20${name}`}>Pedir</a>
             </div>
        </div>
    )
}