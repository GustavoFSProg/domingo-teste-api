import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import route from './routes'
import mongoose from 'mongoose'

dotenv.config()

const { PORT, DATABASE } = process.env

mongoose.connect(DATABASE)

const app = express()

app.use(express.json())
app.use(cors())
app.use(route)

app.listen(PORT, () => {
  console.log(` ☢️  API Running on PORT: ${PORT}`)
})

export default app
