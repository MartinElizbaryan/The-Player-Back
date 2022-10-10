import cors from "cors";
import logger from "morgan";
import express from "express";
import cookieParser from "cookie-parser";
import appRoutes from './routes.js'
import notFoundErrorCreator from './errors/notFoundErrorCreator.js'
import internalServerErrorCreator from './errors/internalServerErrorCreator.js'
import { verifyToken } from "./helpers/auth.js";

const app = express();

const env = process.env.NODE_ENV || "development"


app.use(express.json({ limit: "50mb" }))
app.use(cookieParser())


app.use(
    cors({
        origin: [process.env.CLIENT_URL],
        credentials: true,
    })
)

app.use((req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]
    const payload = verifyToken(token)
    if (payload) {
      const { id, is_admin } = payload
      req.auth = { id, is_admin }
    }
    next()
})

app.use(logger("dev" /*, { skip: (req, res) => res.statusCode < 400 }*/))

app.set("port", process.env.PORT || 5000)
app.set("env", env)

app.use('/api/', appRoutes)

// handle 404 error
app.use((req, res, next) => {
    next(notFoundErrorCreator())
})


// handle errors
app.use((err, req, res, next) => {
    console.log(err)
    const error = err.status ? err : internalServerErrorCreator()
    const status = err.status || 500
    res.status(status).json(error)
})


export default app;