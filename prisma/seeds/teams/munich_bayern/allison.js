import { hashPassword } from "../../../../src/helpers/auth.js"

export default {
    username: "Allison",
    email: await hashPassword("123") + "@gmail.com",
    password: "utyfygaoihwudfawgaw",
    positionPlayer: "gk",

    // Team
    is_capitan: false,
    is_playing: true,

    // Player
    power: 89,

    // Auth
    is_robot: true,

    // All Field
    penalty: 23,
    reaction: 91,
    jumping: 92,
    penalty_def: 82,
    position: 89
}