import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../imgs/logo.png"
import "./header.css"

export default function Header({ search, handleSearch }) {
    const [navbtn, setnavBtn] = useState("cake")
    function handleToggleButton(e) {
        setnavBtn(e.target.id)
    }
    return (
        <>
            <header className="header">
                <nav className="navBar">
                    <img src={logo} alt="logo" className="navBar-logo" />
                    <div className="nav-links-container">
                        <Link id="cake" className={`nav-link ${navbtn === "cake" && "nav-link--selected"}`} onClick={handleToggleButton} to="/">Bolos</Link>
                        <Link id="bread" className={`nav-link ${navbtn === "bread" && "nav-link--selected"}`} onClick={handleToggleButton} to="/paes">Pães</Link>
                    </div>
                </nav>
            </header>
            <div className="container-search">
                <div className="search">
                    <input type="text" autoComplete="off" className="search-input" placeholder="Search" value={search} onChange={e => handleSearch(e.target.value)} />
                    {search.length > 0 &&
                        <button className="search-cleanBtn" onClick={() => handleSearch("")}>x</button>
                    }
                </div>
            </div>
        </>
    )
}