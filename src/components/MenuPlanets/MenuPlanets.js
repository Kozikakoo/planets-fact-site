import {Link} from "react-router-dom";
import React from "react";

function MenuPlanets({closeMenu}) {


    return (
        <nav className="hamburger__nav">
            <ul className="hamburger__planets">
                <Link className="hamburger__planet-link" to="/" onClick={closeMenu}>
                    <li className="hamburger__planet">
                        <div className="hamburger__planet-icon hamburger__planet-icon_mer"></div>
                        <p className="hamburger__planet-name">mercury</p>
                        <div className="hamburger__icon-chevron"></div>
                    </li>
                </Link>
                <Link className="hamburger__planet-link" to="/venus" onClick={closeMenu}>
                    <li className="hamburger__planet">
                        <div className="hamburger__planet-icon hamburger__planet-icon_ven"></div>
                        <p className="hamburger__planet-name">venus</p>
                        <div className="hamburger__icon-chevron"></div>
                    </li>
                </Link>
                <Link className="hamburger__planet-link" to="/earth" onClick={closeMenu}>
                <li className="hamburger__planet">
                    <div className="hamburger__planet-icon hamburger__planet-icon_ear"></div>
                    <p className="hamburger__planet-name">earth</p>
                    <div className="hamburger__icon-chevron"></div>
                </li>
            </Link>
                <Link className="hamburger__planet-link" to="/mars" onClick={closeMenu}>
                <li className="hamburger__planet">
                    <div className="hamburger__planet-icon hamburger__planet-icon_mar"></div>
                    <p className="hamburger__planet-name">mars</p>
                    <div className="hamburger__icon-chevron"></div>
                </li>
            </Link>
                <Link className="hamburger__planet-link" to="/jupiter" onClick={closeMenu}>
                <li className="hamburger__planet">
                    <div className="hamburger__planet-icon hamburger__planet-icon_jup"></div>
                    <p className="hamburger__planet-name">jupiter</p>
                    <div className="hamburger__icon-chevron"></div>
                </li>
            </Link>
                <Link className="hamburger__planet-link" to="/saturn" onClick={closeMenu}>
                <li className="hamburger__planet">
                    <div className="hamburger__planet-icon hamburger__planet-icon_sat"></div>
                    <p className="hamburger__planet-name">saturn</p>
                    <div className="hamburger__icon-chevron"></div>
                </li>
            </Link>
                <Link className="hamburger__planet-link" to="/uranus" onClick={closeMenu}>
                <li className="hamburger__planet">
                    <div className="hamburger__planet-icon hamburger__planet-icon_ura"></div>
                    <p className="hamburger__planet-name">uranus</p>
                    <div className="hamburger__icon-chevron"></div>
                </li>
            </Link>
                <Link className="hamburger__planet-link" to="/neptune" onClick={closeMenu}>
                <li className="hamburger__planet">
                    <div className="hamburger__planet-icon hamburger__planet-icon_nep"></div>
                    <p className="hamburger__planet-name">neptune</p>
                    <div className="hamburger__icon-chevron"></div>
                </li>
            </Link>
            </ul>
        </nav>
    )
}

export default MenuPlanets;