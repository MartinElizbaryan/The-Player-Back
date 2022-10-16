import degea from "./degea.js";

import dalot from "./dalot.js";
import maguire from "./maguire.js";
import varane from "./varane.js";
import show from "./show.js";

import casemiro from "./casemiro.js";
import fernandes from "./fernandes.js";
import eriksen from "./eriksen.js";

import sancho from "./sancho.js";
import ronaldo from "./ronaldo.js";
import rashford from "./rashford.js";

const manUnited = {
    where: { name: "Manchester United" },
    update: {},
    create: {
        name: "Manchester United",
        power: 944,
        power11: 944,
        color: "#ff0000",
        users: {
            create: [
                degea,

                dalot,
                maguire,
                varane,
                show,

                casemiro,
                fernandes,
                eriksen,

                sancho,
                ronaldo,
                rashford,
            ],
          }
    },
}

export default manUnited