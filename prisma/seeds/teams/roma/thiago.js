import { hashPassword } from "../../../../src/helpers/auth.js"

export default {
    username: "Thiago",
    email: await hashPassword("123") + "@gmail.com",
    password: "awdtfawghauwijajwuv",
    positionPlayer: "mf",

    // Team
    is_capitan: false,
    is_playing: true,

    // Player
    power: 86,

    // Auth
    is_robot: true,

    // All Field
    penalty: 75,
    pass: 91,
    pass_long: 89,
    shot_long: 77,
    vision: 88,
}