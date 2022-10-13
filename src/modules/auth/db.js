import { prisma } from "../../services/prisma.js"

const { user } = prisma

export const createUserDB = async (data) => {

  try {
    
    const newUser = await user.create({
      data
    })

    return {
      newUser
    }
  } catch (error) {
    console.log("users/db.js", error)
    return {
      error,
    }
  }
}

export const findUserDB = async (email) => {
  try {
    const foundUser = await user.findUnique({
      where: {
        email,
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