import React from "react";
import Header from "../Header/Header";
import icon from "../../assets/icon-source.svg"


function Main({planet, desc, wiki, rotation, revolution, radius, temp, img}) {
    return (
        <>
            <Header/>
            <main className="planet">
                <img className="planet__img" src={img} alt="Planet"/>
                <div className="planet__block">
                    <h2 className="planet__name">{planet}</h2>
                    <p className="planet__desc">{desc}</p>
                    <p className="planet__wiki">Source:
                        <a className="planet__link" href={wiki}>Wikipedia</a>
                        <img className="planet__link-img" src={icon} alt="icon"/>
                    </p>
                    <ol className="planet__list">
                        <li className="planet__item">OVERVIEW</li>
                        <li className="planet__item">Internal Structure</li>
                        <li className="planet__item">Surface Geology</li>
                    </ol>
                </div>

                <div className="planet__cards">
                    <div className="planet__card">
                        <h3 className="planet__card-title">ROTATION TIME</h3>
                        <p className="planet__card-desc">{rotation}</p>
                    </div>
                    <div>
                        <h3 className="planet__card-title">REVOLUTION TIME</h3>
                        <p className="planet__card-desc">{revolution}</p>
                    </div>
                    <div>
                        <h3 className="planet__card-title">RADIUS</h3>
                        <p className="planet__card-desc">{radius}</p>
                    </div>
                    <div>
                        <h3 className="planet__card-title">AVERAGE TEMP.</h3>
                        <p className="planet__card-desc">{temp}</p>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Main;