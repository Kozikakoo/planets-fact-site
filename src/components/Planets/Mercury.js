import React from "react";
import {mercury, mercuryGeo, mercuryStr} from "../../utils/constants";
import Main from "../Main/Main";

function Mercury() {
    return(
        <Main planet="mercury"
              planetClass="mercury"
              imgOverview={mercury}
              imgGeology={mercuryGeo}
              imgStructure={mercuryStr}
              descOverview="Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days,
              the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
              descGeology="Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering,
              indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s."
              descStructure="Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer,
              a deeper liquid core layer, and a solid inner core.
              The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."
              wiki="https://en.wikipedia.org/wiki/Mercury"
              rotation="58.6 days"
              revolution="87.97 days"
              radius="2,439.7 km"
              temp="430°c"
        />
    )
}

export default Mercury