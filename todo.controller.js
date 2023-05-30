const Io=require("../utils/Io")
const Todos=new Io("./database/todo.json")
const Todo=require("../models/todo.model")

const getTodo= async (req, res)=>{

    
    const todos = await Todos.red()

    
res.status(201).json(todos)
    
}

const addTodo= async (req, res)=>{

    const {name, password}=req.body;

    const todos = await Todos.red()

    let a=true
    for(let i=0; i<todos.length; i++)
    {
        if(todos[i].name==name )
        {
            a=false
            res.status(201).json(`Xatolik ${name} nomga ega bolgan foydalanuvchi mavjud`)
        }
    }
    if(a){
        const id= (todos[todos.length-1]?.id || 0) +1
    const newData = new Todo(id, name, password)

    todos.push(newData)

    await Todos.write(todos)
        res.status(201).json({message:"Siz ro'yxatdan o'tdingiz"})
    }

   
}

const log_in= async (req, res)=>{

    const {name, password}=req.body;

    const todos = await Todos.red()
    let a=true
    for(let i=0; i<todos.length; i++)
    {
        if(todos[i].name===name && todos[i].password===password)
        {
            a=false
            res.status(201).json({message:"Siz tizimga kirdingiz"})
        }
    }
    if(a){
        res.status(201).json({message:"Xatolik : Siz ro'yxatdan o'tmagansiz"})
    }

}
module.exports={
    getTodo,
    addTodo,
    log_in,
}