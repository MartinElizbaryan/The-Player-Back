import { hashPassword } from "../../../../src/helpers/auth.js"

export default {
    username: "Darwin Núñez",
    email: await hashPassword("123") + "@gmail.com",
    password: "suekhfufhesuf",
    positionPlayer: "fw",

    // Team
    is_capitan: false,
    is_playing: true,

    // Player
    power: 84,

    // Auth
    is_robot: true,

    // All Field
    penalty: 78,
    dribbling: 79,
    shot: 83,
    shot_power: 86,
    speed_sprint: 89,
}