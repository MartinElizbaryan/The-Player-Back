import badRequestErrorCreator from "../../errors/badRequestErrorCreator.js";
import { hashPassword, generateToken, verifyUser } from "../../helpers/auth.js";
import * as db from "./db.js"

export const register = async (req, res, next) => {
    try {
        const {username, email, password} = req.body;
        const passwordHash = await hashPassword(password)

        const result = await db.createUserDB({username, email, password: passwordHash})
        
        const payload = {
            id: result.newUser.id,
            is_admin: result.newUser.is_admin,
        }

        const refreshToken = generateToken(payload)

        res.json({newUser: result.newUser, token:refreshToken})
    } catch (error) {
        console.log("auth/services.js", error)
        next(error)
    }
}

export const login = async (req, res, next) => {
    try {
      const { email, password } = req.body
      const { user } = await db.findUserDB(email)
      const result = await verifyUser(password, user)
      if (!result.auth) throw badRequestErrorCreator(result.message)
  
      const payload = {
        id: user.id,
        is_admin: user.is_admin,
      }

      const refreshToken = generateToken(payload)
      
      res.json({user, token:refreshToken})
    } catch (error) {
      next(error)
    }
}

