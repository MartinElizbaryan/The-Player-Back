import * as db from "./db.js"

export const getAllUsers = async (req, res, next) => {
    try {
        // console.log(req.query)
        const { take, skip, type } = req.query
    
        const result = await db.getAllUsersDB({ take, skip, type })
    
        res.json(result)
    } catch (error) {
        console.log("users/services.js", error)
        next(error)
    }
}