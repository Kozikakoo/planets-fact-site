import React from "react";
import Header from "../Header/Header";
import icon from "../../assets/icon-source.svg"
import MenuPlanets from "../MenuPlanets/MenuPlanets";


function Main({
                  planetClass,
                  planet,
                  descOverview,
                  descStructure,
                  descGeology,
                  wiki,
                  rotation,
                  revolution,
                  radius,
                  temp,
                  imgOverview,
                  imgStructure,
                  imgGeology
              }) {
    const [isClickedOverview, setIsClickedOverview] = React.useState(true)
    const [isClickedStructure, setIsClickedStructure] = React.useState(false)
    const [isClickedGeology, setIsClickedGeology] = React.useState(false)
    const [isOpenMenu, setIsOpenMenu] = React.useState(false)

    const handleOpenMenu = () => {
        if(isOpenMenu) {
            setIsOpenMenu(false)
        }
        else {
            setIsOpenMenu(true)
        }
    }

    const handleChangeStructure = () => {
        setIsClickedStructure(true)
        setIsClickedOverview(false)
        setIsClickedGeology(false)
    }

    const handleChangeGeology = () => {
        setIsClickedStructure(false)
        setIsClickedOverview(false)
        setIsClickedGeology(true)
    }

    const handleChangeOverview = () => {
        setIsClickedStructure(false)
        setIsClickedOverview(true)
        setIsClickedGeology(false)
    }

    const handleChangeDescription = () => {
        if (isClickedOverview) {
            return descOverview
        }

        if (isClickedGeology) {
            return descGeology
        }

        if (isClickedStructure) {
            return descStructure
        }
    }

    const handleChangeImage = () => {
        if (isClickedOverview) {
            return imgOverview
        }

        if (isClickedGeology) {
            return imgGeology
        }

        if (isClickedStructure) {
            return imgStructure
        }
    }


    return (
        <>
            <Header openMenu={handleOpenMenu}/>
            <main className="planet">

                <div className="planet__hidden-button">
                    <button className={`planet__button ${isClickedOverview && `planet__button-${planetClass}`}`}
                            type="button" onClick={handleChangeOverview}>
                        OVERVIEW
                    </button>
                    <button className={`planet__button ${isClickedStructure && `planet__button-${planetClass}`}`} type="button" onClick={handleChangeStructure}>
                            Structure
                    </button>
                    <button className={`planet__button ${isClickedGeology && `planet__button-${planetClass}`}`} type="button" onClick={handleChangeGeology}>
                            Geology
                    </button>
                </div>
                {isOpenMenu && <MenuPlanets/>}
                <div className="planet__img-container">
                    <img className="planet__img" src={handleChangeImage()} alt="Planet"/>
                </div>

                <div className="planet__block">
                    <h2 className="planet__name">{planet}</h2>
                    <p className="planet__desc">{handleChangeDescription()}</p>
                    <p className="planet__wiki">Source:
                        <a className="planet__link" href={wiki} target="_blank" rel="noreferrer">Wikipedia</a>
                        <img className="planet__link-img" src={icon} alt="icon"/>
                    </p>
                    <ol className="planet__list">
                        <button className="planet__button" type="button" onClick={handleChangeOverview}>
                            <li className={`planet__item ${isClickedOverview && `planet__item-${planetClass}`} `}>
                                OVERVIEW
                            </li>
                        </button>
                        <button className="planet__button" type="button" onClick={handleChangeStructure}>
                            <li className={`planet__item ${isClickedStructure && `planet__item-${planetClass}`} planet__item-structure`}>
                                Internal
                                Structure
                            </li>
                        </button>
                        <button className="planet__button" type="button" onClick={handleChangeGeology}>
                            <li className={`planet__item ${isClickedGeology && `planet__item-${planetClass}`} `}>
                                Surface
                                Geology
                            </li>
                        </button>
                    </ol>
                </div>

                <div className="planet__cards">
                    <div className="planet__card">
                        <h3 className="planet__card-title">ROTATION TIME</h3>
                        <p className="planet__card-desc">{rotation}</p>
                    </div>
                    <div className="planet__card">
                        <h3 className="planet__card-title">REVOLUTION TIME</h3>
                        <p className="planet__card-desc">{revolution}</p>
                    </div>
                    <div className="planet__card">
                        <h3 className="planet__card-title">RADIUS</h3>
                        <p className="planet__card-desc">{radius}</p>
                    </div>
                    <div className="planet__card">
                        <h3 className="planet__card-title">AVERAGE TEMP.</h3>
                        <p className="planet__card-desc">{temp}</p>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Main;