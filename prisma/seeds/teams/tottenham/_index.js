import loris from "./loris.js";

import royal from "./royal.js";
import romero from "./romero.js";
import dier from "./dier.js";
import bandavies from "./bandavies.js";

import hojbjerg from "./hojbjerg.js";
import perisic from "./perisic.js";
import bissouma from "./bissouma.js";

import richarlison from "./richarlison.js";
import kane from "./kane.js";
import son from "./son.js";

const liverpool = {
    where: { name: "Tottenham" },
    update: {},
    create: {
        name: "Tottenham",
        power: 953,
        power11: 953,
        color: "#ff0000",
        users: {
            create: [
                loris,

                royal,
                romero,
                dier,
                bandavies,

                hojbjerg,
                perisic,
                bissouma,

                richarlison,
                kane,
                son,
            ],
          }
    },
}

export default liverpool