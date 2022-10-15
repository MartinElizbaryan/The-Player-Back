import {getAllTeamsDB} from "../modules/teams/db.js";
import {getRandomNumber} from "../helpers/common.js";


export const setNextMatches = async () => {
  const teams = await getAllTeamsDB({type: "points"})

  if (team.length % 2 === 1) {
    const teamHasToMissIndex = getRandomNumber(team.length)
    teams.splice(teamHasToMissIndex,1)
  }

  for(let i=0; i< team.length / 2; i++) {v
    // get first team
    let teamIndex = getRandomNumber(team.length)
    const team1Id = teams.splice(teamHasToMissIndex,1).id

    // get second team
    teamIndex = getRandomNumber(team.length)
    const team2Id = teams.splice(teamHasToMissIndex,1).id
  }


}

export const deletePreviousMatches = async () => {

}