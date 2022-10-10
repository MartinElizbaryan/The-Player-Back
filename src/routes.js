import { Router } from "express";
import { authRoutes } from "./modules/auth/routes.js";
import { teamsRoutes } from "./modules/teams/routes.js";
import { usersRoutes } from "./modules/users/routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/teams", teamsRoutes);
router.use("/users", usersRoutes);

export default router;