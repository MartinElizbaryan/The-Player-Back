import courtois from "./courtois.js";

import carvajal from "./carvajal.js";
import rudiger from "./rudiger.js";
import alaba from "./alaba.js";
import mendy from "./mendy.js";

import kroos from "./kroos.js";
import modric from "./modric.js";
import tchouameni from "./tchouameni.js";

import vinicius from "./vinicius.js";
import benzema from "./benzema.js";
import valverde from "./valverde.js";

const realMadrid = {
    where: { name: "Real Madrid" },
    update: {},
    create: {
        name: "Real Madrid",
        power: 944,
        power11: 944,
        color: "#121212",
        users: {
            create: [
                courtois,

                carvajal,
                rudiger,
                alaba,
                mendy,

                kroos,
                modric,
                tchouameni,

                vinicius,
                benzema,
                valverde,
            ],
          }
    },
}

export default realMadrid