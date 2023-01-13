import React from "react";
import {jupiter, jupiterGeo, jupiterStr} from "../../utils/constants";
import Main from "../Main/Main";

function Jupiter() {
    return(
        <Main planet="jupiter"
              planetClass="jupiter"
              imgOverview={jupiter}
              imgStructure={jupiterStr}
              imgGeology={jupiterGeo}
              descOverview="Jupiter is the fifth planet from the Sun and the largest in the Solar System.
              It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined,
              but less than one-thousandth the mass of the Sun."
              descStructure="When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle.
              A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation,
              which would have disrupted an originally solid Jovian core."
              descGeology="The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator.
              It is known to have existed since at least 1831, and possibly since 1665."
              wiki="https://en.wikipedia.org/wiki/Jupiter"
              rotation="9.93 hours"
              revolution="11.86 years"
              radius="69,911 km"
              temp="-108°c"
        />
    )
}

export default Jupiter