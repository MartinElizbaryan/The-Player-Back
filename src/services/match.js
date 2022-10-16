import {getAllTeamsIdDB} from "../modules/teams/db.js";
import {addMatches} from "../modules/matches/db.js";

import {getRandomNumber} from "../helpers/common.js";
import array from "lodash/array.js"

const TEAMS_GROUP_COUNT = 8;

export const setNextMatches = async () => {
  const result = await getAllTeamsIdDB({type: "points"})
  const {teams} = result

  if (teams.length % 2 === 1) {
    const teamHasToMissIndex = getRandomNumber(teams.length - 1)
    teams.splice(teamHasToMissIndex,1)
  }

  const chunkedArray=array.chunk(teams, TEAMS_GROUP_COUNT)

  const matches = [];
  chunkedArray.forEach((group) => {
    while(group.length) {
      // get first team
      let teamIndex = getRandomNumber(group.length - 1)
      const team1Id = group.splice(teamIndex,1)[0].id
      
      // get second team
      teamIndex = getRandomNumber(group.length - 1)
      const team2Id = group.splice(teamIndex,1)[0].id

      matches.push({team1_id: team1Id, team2_id: team2Id})
    }
  })

  await addMatches(matches)

  // for(let i=0; i< team.length / 2; i++) {v
  //   // get first team
  //   let teamIndex = getRandomNumber(team.length)
  //   const team1Id = teams.splice(teamHasToMissIndex,1).id

  //   // get second team
  //   teamIndex = getRandomNumber(team.length)
  //   const team2Id = teams.splice(teamHasToMissIndex,1).id
  // }


}

export const deletePreviousMatches = async () => {

}