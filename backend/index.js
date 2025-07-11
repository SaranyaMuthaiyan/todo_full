import express from 'express'
import cors from 'cors' //middleware 
import connectionDb from './db.js'
import 'dotenv/config'
import Todo from './models/todo.js'

const app = express()
const port = process.env.PORT

app.use(express.json()) //mw
app.use(cors())
 

app.get('/todos', async (req, res) => {
try{
   const todos = await  Todo.find({})
    res.status(200).json(todos)
}catch(e){
    res.status(400).json(e)
}
    
})
app.post('/todos', async (req, res) => {
    try{
  const todo =  await  Todo.create(req.body)
  res.status(200).json(todo)
//    const todo = new  Todo(req.body)
//    await todo.save()
    }catch(e){
        console.log(e)
        res.status(400).json(e)
    }
   
})
app.listen(port, () => {
    console.log('Listening on port: ' + port)
connectionDb()
})
