import { prisma } from "../../services/prisma.js"

const { match } = prisma

export const addMatches = async (data) => {
    try {
      
      const matches = await match.createMany({
        data
      })
  
      return {
        matches,
      }
    } catch (error) {
      console.log("users/db.js", error)
      return {
        error,
      }
    }
}

export const getMatches = async () => {
  try {
    const query = {
      where: {
        is_finished: false,
      },
      include: {
        team1: {
          include: {
            users: true
          }
        },
        team2: {
          include: {
            users: true
          }
        },
      }
    }
    
    const matches = await match.findMany(query)

    return {
      matches,
    }
  } catch (error) {
    console.log("users/db.js", error)
    return {
      error,
    }
  }
}