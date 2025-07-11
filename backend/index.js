import express from 'express'
import cors from 'cors' //middleware 
import connectionDb from './db.js'
import 'dotenv/config'
import Todo from './models/todo.js'

const app = express()
const port = process.env.PORT

app.use(cors())

app.get('/todo', async (req, res) => {
try{
   const todos = await  Todo.find({})
    res.status(200).json(todos)
}catch(e){
    res.status(400).json(e)
}
    
})
app.listen(port, () => {
    console.log('Listening on port: ' + port)
connectionDb()
})
