import { hashPassword } from "../../../../src/helpers/auth.js"

export default {
    username: "Virgil van Dijk",
    email: await hashPassword("123") + "@gmail.com",
    password: "aukguakwdkuawgdkuaw",
    positionPlayer: "df",

    // Team
    is_capitan: false,
    is_playing: true,

    // Player
    power: 91,

    // Auth
    is_robot: true,

    // All Field
    penalty: 62,
    interceptions: 90,
    head_boatle: 87,
    speed_sprint: 91,
    position: 94
}