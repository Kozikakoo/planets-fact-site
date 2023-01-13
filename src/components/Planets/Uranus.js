import React from "react";
import Main from "../Main/Main";
import {uranus, uranusStr, uranusGeo} from "../../utils/constants";

function Uranus() {
    return(
        <Main planet="uranus"
              planetClass="uranus"
              imgOverview={uranus}
              imgStructure={uranusStr}
              imgGeology={uranusGeo}
              descOverview="Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky,
              Uranus according to Greek mythology, was the great-grandfather of Ares.
              It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System."
              descStructure="The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre,
              an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses."
              descGeology="The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium.
              The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere."
              wiki="https://en.wikipedia.org/wiki/Uranus"
              rotation="17.2 hours"
              revolution="84 years"
              radius="25,362 km"
              temp="-195°c"
        />
    )
}

export default Uranus