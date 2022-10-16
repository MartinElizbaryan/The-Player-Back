import {setNextMatches as setNextMatchesServices} from "../src/services/match.js"

export const setNextMatches = async () => {
    await setNextMatchesServices()
    console.log(`Comming mathces has been set`)
}

