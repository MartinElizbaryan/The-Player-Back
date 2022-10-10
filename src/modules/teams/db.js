import { prisma } from "../../services/prisma.js"

const { team } = prisma

export const getAllTeamsDB = async ({ type="id", take, skip=0 }) => {
    try {
      const query = {
        orderBy: {
          [type]: "desc",
        },
        include: {
          users: {
            where: {
              is_capitan: true
            }
          } 
        }
      }
  
      if (take) {
        query.take = +take
        query.skip = skip || 0
      }
      const teams = await team.findMany(query)
  
      return {
        teams,
      }
    } catch (error) {
      console.log("teams/db.js", error)
      return {
        error,
      }
    }
  }