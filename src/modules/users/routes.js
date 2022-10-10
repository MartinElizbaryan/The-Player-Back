import { Router } from "express"
import * as service from "./services.js"

const router = Router()

router.get("/", service.getAllUsers)
router.get("/me", service.findMe)

export { router as usersRoutes }