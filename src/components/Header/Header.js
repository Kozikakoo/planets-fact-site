import React from "react";
import {Link} from "react-router-dom"

function Header() {
    return (
        <header className="header">
            <h1 className="header__name">THE PLANETS</h1>
            <nav className="header__nav">
                <ul className="header__planets">
                    <li className="header__planet">
                        mercury
                    </li>
                    <li className="header__planet">
                        venus
                    </li>
                    <li className="header__planet">
                        earth
                    </li>
                    <li className="header__planet">
                        mars
                    </li>
                    <li className="header__planet">
                        jupiter
                    </li>
                    <li className="header__planet">
                        saturn
                    </li>
                    <li className="header__planet">
                        uranus
                    </li>
                    <li className="header__planet">
                        neptune
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header