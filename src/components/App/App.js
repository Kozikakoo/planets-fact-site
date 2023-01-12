import React from "react";
import {Route} from "react-router-dom";
import Main from "../Main/Main";
import {mercury, venus, earth, mars, jupiter, saturn, uranus, neptune} from "../../utils/constants"


function App() {
    return (
        <div className="App">


                <Main planet="mercury"
                      img={mercury}
                      desc="Mercury appears to have a solid silicate crust and mantle overlying a solid,
                       iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core.
                        The planet's density is the second highest in the Solar System at 5.427 g/cm3,
                         only slightly less than Earth's density."
                      wiki=""
                      rotation="58.6 days"
                      revolution="87.97 days"
                      radius="2,439.7 km"
                      temp="430°c"
                />


        </div>
    )

}

export default App;