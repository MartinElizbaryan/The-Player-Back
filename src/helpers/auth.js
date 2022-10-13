import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const hashPassword = async (password) => {
    return bcrypt.hash(password, 12)
}
  
export const comparePassword = async (password, hash) => {
    return bcrypt.compare(password, hash)
}

export const generateToken = (payload) => {
  const expiresIn = 60 * 60 * 24 * 30
  const token = jwt.sign(payload, process.env.JWT_PRIVATE_KEY, {
    expiresIn,
  })
  return token
}

export const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, process.env.JWT_PRIVATE_KEY)
    return payload
  } catch (error) {
    return null
  }
}

export const verifyUser = async (password, user) => {
  if (!user) {
    return {
      auth: false,
      message: "user not found",
    }
  }
  const isPasswordCorrect = await comparePassword(password, user.password)
  if (!isPasswordCorrect) {
    return {
      auth: false,
      message: "email/password is invalid",
    }
  }
  return {
    auth: true,
  }
}