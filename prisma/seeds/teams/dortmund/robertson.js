import { hashPassword } from "../../../../src/helpers/auth.js"

export default {
    username: "Andrew Robertson",
    email: await hashPassword("123") + "@gmail.com",
    password: "aukguakwdkuawgdkuaw",
    positionPlayer: "df",

    // Team
    is_capitan: false,
    is_playing: true,

    // Player
    power: 86,

    // Auth
    is_robot: true,

    // All Field
    penalty: 55,
    interceptions: 87,
    head_boatle: 82,
    speed_sprint: 84,
    position: 91
}