import {startGame as startGameServices} from "../src/services/game.js"

export const startGame = async () => {
    await startGameServices()
    console.log(`Games has been finished`)
}

