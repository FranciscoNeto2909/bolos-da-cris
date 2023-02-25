import { Link } from "react-router-dom"
import "./navBar.css"
import logo from "../../imgs/logo.png"
import { useState } from "react"
export default function NavBar({ search, handleSearch }) {
    const [navbtn, setnavBtn] = useState("cake")
    function handleToggleButton(e) {
        setnavBtn(e.target.id)
    }
    return (
        <nav className="navBar">
            <img src={logo} alt="logo" className="navBar-logo" />
            <div className="nav-links-container">
                <Link id="cake" className={`nav-link ${navbtn === "cake" && "nav-link--selected"}`} onClick={handleToggleButton} to="/">Bolos</Link>
                <Link id="bread" className={`nav-link ${navbtn === "bread" && "nav-link--selected"}`} onClick={handleToggleButton} to="/paes">Pães</Link>
            </div>
            <div className="container-search">
                <input type="text" autoComplete="off" className="search-input" placeholder="Search" value={search} onChange={handleSearch} />
            </div>
        </nav>
    )
}