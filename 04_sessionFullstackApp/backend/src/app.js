import express from 'express'
import { sampleRouter } from './routes/sample.routes.js'
import session from 'express-session'
import { sessionTracker } from './middlewares/session.middleware.js'

const app = express()


app.use(session(
    {
        secret: "mohdSameer",
        resave: false,
        saveUninitialized: false,
        cookie: {maxAge:  10000}
    }
))

app.use(sessionTracker)

app.use('/v1', sampleRouter)

export {
    app
}