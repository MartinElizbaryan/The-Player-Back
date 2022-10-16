import {getMatches} from "../modules/matches/db.js";

export const startGame = async () => {
    const matches = await getMatches();

    return matches 
}

