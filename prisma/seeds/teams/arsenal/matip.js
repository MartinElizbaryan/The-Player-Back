import { hashPassword } from "../../../../src/helpers/auth.js"

export default {
    username: "Joel Matip",
    email: await hashPassword("123") + "@gmail.com",
    password: "usefbuseyf7esgf7esf",
    positionPlayer: "df",

    // Team
    is_capitan: false,
    is_playing: true,

    // Player
    power: 84,

    // Auth
    is_robot: true,

    // All Field
    penalty: 42,
    interceptions: 84,
    head_boatle: 89,
    speed_sprint: 79,
    position:85
}