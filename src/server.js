import express from 'express'
const app = express()
import morgan from 'morgan'
import configViewEngine from './config/viewEngine'
import initApiRouter from './routes/api.router'
import dotenv from 'dotenv'
dotenv.config()

// config
app.use(morgan('tiny'))
// body-parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// 
configViewEngine(app)
// initApiRouter
initApiRouter(app)


app.listen(process.env.PORT, () => {
    console.log(`==> http://localhost:${process.env.PORT}`);
})