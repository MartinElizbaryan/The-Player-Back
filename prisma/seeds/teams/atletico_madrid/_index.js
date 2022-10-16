import allison from "./allison.js";

import arnold from "./arnold.js";
import matip from "./matip.js";
import vandijk from "./vandijk.js";
import robertson from "./robertson.js";

import fabinho from "./fabinho.js";
import henderson from "./henderson.js";
import thiago from "./thiago.js";

import salah from "./salah.js";
import nunez from "./nunez.js";
import diaz from "./diaz.js";

const liverpool = {
    where: { name: "Atletico Madrid" },
    update: {},
    create: {
        name: "Atletico Madrid",
        power: 953,
        power11: 953,
        color: "#ff0000",
        users: {
            create: [
                allison,

                arnold,
                matip,
                vandijk,
                robertson,

                fabinho,
                henderson,
                thiago,

                salah,
                nunez,
                diaz,
            ],
          }
    },
}

export default liverpool