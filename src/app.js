import cors from "cors";
import logger from "morgan";
import express from "express";
import cookieParser from "cookie-parser";
import appRoutes from './routes.js'
import notFoundErrorCreator from './errors/notFoundErrorCreator.js'
import internalServerErrorCreator from './errors/internalServerErrorCreator.js'

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
    console.log(111111111111)
    console.log(err)
    const error = err.status ? err : internalServerErrorCreator()
    const status = err.status || 500
    res.status(status).json(error)
})


export default app;