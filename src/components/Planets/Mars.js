import React from "react";
import {mars, marsGeo, marsStr} from "../../utils/constants";
import Main from "../Main/Main";

function Mars() {
    return(
        <Main planet="mars"
              planetClass="mars"
              imgOverview={mars}
              imgStructure={marsStr}
              imgGeology={marsGeo}
              descOverview="Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury.
              In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'."
              descStructure="Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid.
              Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur."
              descGeology="Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock.
              The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt."
              wiki="https://en.wikipedia.org/wiki/Mars"
              rotation="1.03 days"
              revolution="1.88 years"
              radius="3,389.5 km"
              temp="−28°c"
        />
    )
}

export default Mars