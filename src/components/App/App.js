import React from "react";
import {Route, Routes} from "react-router-dom";
import Mercury from "../Planets/Mercury";
import Earth from "../Planets/Earth";
import Venus from "../Planets/Venus";
import Mars from "../Planets/Mars";
import Jupiter from "../Planets/Jupiter";
import Saturn from "../Planets/Saturn";
import Uranus from "../Planets/Uranus";
import Neptune from "../Planets/Neptune";


function App() {
    const planet = document.querySelector(".planet");


    return (
        <div className="App">
                <Routes>
                    <Route exact path="/" element={<Mercury/>}/>

                    <Route path="/mars" element={<Mars/>}/>

                    <Route path="/earth" element={<Earth/>}/>

                    <Route path="/jupiter" element={<Jupiter/>}/>

                    <Route path="/saturn" element={<Saturn/>}/>

                    <Route path="/uranus" element={<Uranus/>}/>

                    <Route path="/neptune"
                           element={<Neptune/>}/>

                    <Route path="/venus" element={<Venus/>}/>
                </Routes>
        </div>
    )

}

export default App;