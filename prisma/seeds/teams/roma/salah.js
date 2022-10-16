import { hashPassword } from "../../../../src/helpers/auth.js"

export default {
    username: "Mohamed Salah",
    email: await hashPassword("123") + "@gmail.com",
    password: "ugfuyfttstsi",
    positionPlayer: "fw",

    // Team
    is_capitan: false,
    is_playing: true,

    // Player
    power: 90,

    // Auth
    is_robot: true,

    // All Field
    penalty: 86,
    dribbling: 90,
    shot: 93,
    shot_power: 85,
    speed_sprint: 91,
}