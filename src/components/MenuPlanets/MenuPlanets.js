import {Link} from "react-router-dom";
import React from "react";

function MenuPlanets() {
    return(
        <nav className="hamburger__nav">
            <ul className="hamburger__planets">
                <li className="hamburger__planet">
                    <div className="hamburger__planet-icon hamburger__planet-icon_mer"></div>
                    <Link className="hamburger__planet-link" to="/">mercury</Link>
                    <div className="hamburger__icon-chevron"></div>
                </li>
                <li className="hamburger__planet">
                    <div className="hamburger__planet-icon hamburger__planet-icon_ven"></div>
                    <Link className="hamburger__planet-link" to="/venus">venus</Link>
                    <div className="hamburger__icon-chevron"></div>
                </li>
                <li className="hamburger__planet">
                    <div className="hamburger__planet-icon hamburger__planet-icon_ear"></div>
                    <Link className="hamburger__planet-link" to="/earth">earth</Link>
                    <div className="hamburger__icon-chevron"></div>
                </li>
                <li className="hamburger__planet">
                    <div className="hamburger__planet-icon hamburger__planet-icon_mar"></div>
                    <Link className="hamburger__planet-link" to="/mars">mars</Link>
                    <div className="hamburger__icon-chevron"></div>
                </li>
                <li className="hamburger__planet">
                    <div className="hamburger__planet-icon hamburger__planet-icon_jup"></div>
                    <Link className="hamburger__planet-link" to="/jupiter">jupiter</Link>
                    <div className="hamburger__icon-chevron"></div>
                </li>
                <li className="hamburger__planet">
                    <div className="hamburger__planet-icon hamburger__planet-icon_sat"></div>
                    <Link className="hamburger__planet-link" to="/saturn">saturn</Link>
                    <div className="hamburger__icon-chevron"></div>
                </li>
                <li className="hamburger__planet">
                    <div className="hamburger__planet-icon hamburger__planet-icon_ura"></div>
                    <Link className="hamburger__planet-link" to="/uranus">uranus</Link>
                    <div className="hamburger__icon-chevron"></div>
                </li>
                <li className="hamburger__planet">
                    <div className="hamburger__planet-icon hamburger__planet-icon_nep"></div>
                    <Link className="hamburger__planet-link" to="/neptune">neptune</Link>
                    <div className="hamburger__icon-chevron"></div>
                </li>
            </ul>
        </nav>
    )
}

export default MenuPlanets;