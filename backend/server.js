import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
const port = process.env.PORT || 3500
//
import userRoutes from './routes/userRoutes.js'

const app = express()

// use my routes
app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
  res.send('Server is HOT')
})

// error handling from errorMiddleware
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
