import { Router } from "express"
import * as service from "./services.js"
import validate from "../../middlewares/validate.middleware.js"
import validations from "./validations.js"

const {
    createUserSchema,
    findUserSchema,
} = validations

const router = Router()

router.post("/register", validate(createUserSchema), service.register)
router.post("/login", validate(findUserSchema), service.login)

export { router as authRoutes }