import { hashPassword } from "../../../../src/helpers/auth.js"

export default {
    username: "Trent Alexander-Arnold",
    email: await hashPassword("123") + "@gmail.com",
    password: "ytytdtyju",
    positionPlayer: "df",

    // Team
    is_capitan: false,
    is_playing: true,

    // Player
    power: 87,

    // Auth
    is_robot: true,

    // All Field
    penalty: 55,
    interceptions: 87,
    head_boatle: 81,
    speed_sprint: 86,
    position: 93
}