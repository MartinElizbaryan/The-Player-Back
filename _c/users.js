import { hashPassword } from "../src/helpers/auth.js"
import { createUserDB } from "../src/modules/auth/db.js"

export const createUser = async (userFromCommand) => {
    const userToSendDb = {
        username: Date.now() + "Yan",
        email: Date.now() + "@gmail.com",
        password: await hashPassword("qwertyuio"),
        ...userFromCommand
    }

    const result = await createUserDB(userToSendDb)
    if(result.error) {
        console.log("Somthing Went Wrong")
        return
    }

    console.log(`User is created. His Id=${result.newUser.id}`)
}