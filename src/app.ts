import express, { Request, Response, NextFunction } from 'express'
import todoRoutes from './routes/todo'
import { json } from 'body-parser'

const app = express()

app.use(json())

app.use('/todos', todoRoutes)

// error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(400).json({ message: err.message })
}) // if no route matches then this middleware will be executed

app.listen(3001, () => console.log(`Server is running on PORT: 3001`))