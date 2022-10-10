import { prisma } from "../../services/prisma.js"

const { user } = prisma

export const getAllUsersDB = async ({ type="id", take, skip=0 }) => {
    try {
      const query = {
        orderBy: {
          [type]: "desc",
        },
        include: {
          team: true
        }
      }
  
      if (take) {
        query.take = +take
        query.skip = skip || 0
      }
      const users = await user.findMany(query)
  
      return {
        users,
      }
    } catch (error) {
      console.log("users/db.js", error)
      return {
        error,
      }
    }
  }

  export const findMeDB = async (id) => {
    try {
      const foundUser = await user.findUnique({
        where: {
          id: +id,
        },
        include: {
          team: true
        },
      })
      return {
        user: foundUser,
      }
    } catch (error) {
      return {
        error,
      }
    }
  }