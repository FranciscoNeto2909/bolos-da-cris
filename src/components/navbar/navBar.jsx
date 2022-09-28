import { Link } from "react-router-dom"
import "./navBar.css"
import logo from "../../imgs/logo.png"
export default function NavBar() {
    return(
        <nav className="navBar">
            <img src={logo} alt="logo" className="navBar-logo"/>
            <div className="nav-links-container">
                <Link className="nav-link"to="/">Bolos</Link>
                <Link className="nav-link"to="/paes">Pães</Link>
            </div>
        </nav>
    )
}