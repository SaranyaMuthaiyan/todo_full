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

app.delete('/todos/:id', async (req,res) => {
    try{
const response = await Todo.findByIdAndDelete(req.params.id)
console.log(response)  
res.status(200).json(response)  
}catch(e){
console.log(e)
res.status(400).json(e)
    }
})

app.put('/todos/:id', async (req, res) => {
    try{
        console.log('PUT /todos/:id')
        const todo = await Todo.findById(req.params.id)
       todo.completed = !todo.completed
      await todo.save()
      
        console.log(todo)
        res.json(todo)
    }catch(e){
        console.log(e)
        res.json(e)
    }
})
app.listen(port, () => {
    console.log('Listening on port: ' + port)
connectionDb()
})
