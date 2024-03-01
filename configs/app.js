'use strict'

import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import { config } from "dotenv"
import userRoutes from '../src/user/user.routes.js'
import categoryRoutes from '../src/category/category.routes.js'
import opinionRoutes from '../src/opinion/opinion.routes.js'
import commentRoutes from '../src/comment/comment.routes.js'

const app = express()
config();
const port = process.env.PORT || 3056

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

//Declaración de rutas
app.use(userRoutes)
app.use('/category', categoryRoutes)
app.use('/opinion', opinionRoutes)
app.use('/comment', commentRoutes)

export const initServer = () => {
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}