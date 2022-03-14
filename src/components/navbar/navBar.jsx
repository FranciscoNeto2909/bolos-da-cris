import { Link } from "react-router-dom"
import "./navBar.css"
import logo from "../../img/logo.png"
export default function NavBar() {
    return(
        <nav>
            <img src={logo} alt="logo" />
            <div className="nav-links">
                <Link to="/inicio">Inicio</Link>
                <Link to="/bolos">Bolos</Link>
                <Link to="/paes">Pães</Link>
                <Link to="/sobre">Sobre</Link>
            </div>
        </nav>
    )
}