import ederson from "./ederson.js";
import walker from "./walker.js";
import dias from "./dias.js";
import laporte from "./laporte.js";
import cancelo from "./cancelo.js";
import rodri from "./rodri.js";
import bruyne from "./bruyne.js";
import bernardo from "./bernardo.js";
import mahrez from "./mahrez.js";
import haaland from "./haaland.js";
import foden from "./foden.js";

const liverpool = {
    where: { name: "Manchester City" },
    update: {},
    create: {
        name: "Manchester City",
        power: 961,
        power11: 961,
        color: "#00caff",
        users: {
            create: [
                ederson,

                walker,
                dias,
                laporte,
                cancelo,

                rodri,
                bruyne,
                bernardo,

                mahrez,
                haaland,
                foden,
            ],
          }
    },
}

export default liverpool