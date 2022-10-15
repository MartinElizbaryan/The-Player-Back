import mendy from "./mendy.js";

import james from "./james.js";
import silva from "./silva.js";
import koulibaly from "./koulibaly.js";
import chilwell from "./chilwell.js";

import jorginho from "./jorginho.js";
import kante from "./kante.js";
import kovacic from "./kovacic.js";

import mount from "./mount.js";
import havertz from "./havertz.js";
import sterling from "./sterling.js";

const liverpool = {
    where: { name: "Chelsea" },
    update: {},
    create: {
        name: "Chelsea",
        power: 944,
        power11: 944,
        color: "#ff0000",
        users: {
            create: [
                mendy,

                james,
                silva,
                koulibaly,
                chilwell,

                jorginho,
                kante,
                kovacic,

                mount,
                havertz,
                sterling,
            ],
          }
    },
}

export default liverpool