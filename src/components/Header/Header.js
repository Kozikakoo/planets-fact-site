import React from "react";
import {Link} from "react-router-dom"

function Header() {
    return (
        <header className="header">
            <h1 className="header__name">THE PLANETS</h1>
            <div className="header__menu"></div>
            <nav className="header__nav">
                <ul className="header__planets">
                    <li className="header__planet">
                        <Link className="header__planet-link header__planet-link_mer" to="/">mercury</Link>
                    </li>
                    <li className="header__planet">
                        <Link className="header__planet-link header__planet-link_ven" to="/venus">venus</Link>
                    </li>
                    <li className="header__planet">
                        <Link className="header__planet-link header__planet-link_ear" to="/earth">earth</Link>
                    </li>
                    <li className="header__planet">
                        <Link className="header__planet-link header__planet-link_mar" to="/mars">mars</Link>
                    </li>
                    <li className="header__planet">
                        <Link className="header__planet-link header__planet-link_jup" to="/jupiter">jupiter</Link>
                    </li>
                    <li className="header__planet">
                        <Link className="header__planet-link header__planet-link_sat" to="/saturn">saturn</Link>
                    </li>
                    <li className="header__planet">
                        <Link className="header__planet-link header__planet-link_ura" to="/uranus">uranus</Link>
                    </li>
                    <li className="header__planet">
                        <Link className="header__planet-link header__planet-link_nep" to="/neptune">neptune</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header