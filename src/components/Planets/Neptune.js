import React from "react";
import {neptune, neptuneGeo, neptuneStr} from "../../utils/constants";
import Main from "../Main/Main";

function Neptune() {
    return (
        <Main planet="neptune"
              planetClass="neptune"
              imgOverview={neptune}
              imgStructure={neptuneStr}
              imgGeology={neptuneGeo}
              descOverview="Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter,
              the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus."
              descStructure="Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core.
              Increasing concentrations of methane, ammonia and water are found in the lower regions."
              descGeology="Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present.
              Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."
              wiki="https://en.wikipedia.org/wiki/Neptune"
              rotation="16.08 hours"
              revolution="164.79 years"
              radius="24,622 km"
              temp="-201°c"
        />
    )
}

export default Neptune