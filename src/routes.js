import { Router } from "express";
import { authRoutes } from "./modules/auth/routes.js";
import { teamsRoutes } from "./modules/teams/routes.js";
import { usersRoutes } from "./modules/users/routes.js";
import { startGame } from "./services/game.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/teams", teamsRoutes);
router.use("/users", usersRoutes);

router.get("/start-game", async (req,res) => {
    const matches = await startGame();
    res.send(matches)
})

export default router;