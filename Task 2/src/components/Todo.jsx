import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Todo.css"
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import StarRateIcon from '@mui/icons-material/StarRate';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';


export default function Todo(){

    let [todo , setTodo] = useState([{task : "add sample task" , id : uuidv4() , isDone : false}]);

    let [newtodo , setNewtodo] = useState("");

    function handlenewtodo(event){
        setNewtodo(event.target.value.toLowerCase() );
        console.log(newtodo);
    } 

    let addtask = () => {
        if(newtodo.length > 0){
             setTodo( (prevtodo) => {
            return [...prevtodo,{ task : newtodo , id: uuidv4() , isDone: false }]});
        setNewtodo("");
        }
       
    }

    function removetask(key) {
       setTodo(todo.filter( (task) => (task.id !== key)))
    }

    function deleteall(){
        setTodo(todo.splice(0,...todo))
    }

    let imp = (key) => {
      setTodo( (todo) => 
      todo.map( (todo) => {
        if(todo.id === key)
        {
            return{
                ...todo,
                task: todo.task.toUpperCase(),
            };
        } else{
            return todo; 
        }
    }))}

    let doneTask = (key) => {
      setTodo( (todo) => 
      todo.map( (todo) => {
        if(todo.id === key)
        {
            return{
                ...todo,
                isDone: true,
            };
        } else{
            return todo; 
        }
    }))}

    
 
    return(
        <div>
             <div className="header">
                 <h1 className='title'>TODO LIST</h1>
                 <TextField id="task" label="Enter Task" variant="outlined" required value={newtodo} onChange={handlenewtodo} />
                 <Button id="btn" variant='contained' color='success' onClick={addtask}>ADD Task</Button>
             </div>
             <br />
             <hr /> 

             <div className='task'>
                <ul >
                {
                todo.map( (todo) => (
                  <li key={todo.id} > 
                  <span style={ todo.isDone ? { textDecorationLine : "line-through" } : {} }> {todo.task} </span>

                  <Button id="imp" onClick={()=>{imp(todo.id)}} ><StarRateIcon/></Button>
                  <Button id='deletetask' variant="contained" startIcon={<DeleteIcon />} onClick={() => removetask(todo.id)} >Delete</Button>
                  <Button id='done' variant="contained" endIcon={<CheckCircleOutlineOutlinedIcon />} onClick={() => doneTask(todo.id)} >Mark As Done</Button>
                  </li>
                ))}
             </ul>

             <IconButton aria-label="delete" id="delete" onClick={deleteall} > <DeleteIcon /> </IconButton>

             </div>

             

             

        </div>
    );
}