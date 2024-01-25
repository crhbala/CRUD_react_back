import AppRoutes from './src/routes/root.js'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()
const PORT = process.env.PORT
const app = express()
app.use(express.json())


app.use('/', AppRoutes)

app.listen(PORT, () => console.log(`server listening ${PORT}`))