import terstegen from "./terstegen.js";
import araujo from "./araujo.js";
import kounde from "./kounde.js";
import pique from "./pique.js";
import alba from "./alba.js";
import busquets from "./busquets.js";
import jong from "./jong.js";
import pedri from "./pedri.js";
import dembele from "./dembele.js";
import lewandowski from "./lewandowski.js";
import depay from "./depay.js";

// https://www.fifaindex.com/team/241/fc-barcelona/
const barcelona = {
    where: { name: "Barcelona" },
    update: {},
    create: {
        name: "Barcelona",
        power: 944,
        power11: 944,
        color: "#ff0000",
        users: {
            create: [
                terstegen,

                araujo,
                kounde,
                pique,
                alba,

                busquets,
                jong,
                pedri,

                dembele,
                lewandowski,
                depay,
            ],
          }
    },
}

export default liverpool