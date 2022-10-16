import { hashPassword } from "../../../../src/helpers/auth.js"

export default {
    username: "Jordan Henderson",
    email: await hashPassword("123") + "@gmail.com",
    password: "awdtfawghauwijajwuv",
    positionPlayer: "mf",

    // Team
    is_capitan: true,
    is_playing: true,

    // Player
    power: 84,

    // Auth
    is_robot: true,

    // All Field
    penalty: 64,
    pass: 85,
    pass_long: 87,
    shot_long: 83,
    vision: 82,
}