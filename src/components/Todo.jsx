import React, { useState, useEffect, useRef } from 'react';
import todo_icon from "../assets/todo_icon.png"
import TodoItems from './TodoItems';

const Todo = () => {
    const [todoList, setTodoList]=useState([]);
    const inputRef=useRef();
    const add = ()=>{
        const inputText= inputRef.current.value.trim();

        if(inputText===""){
            return null;
        }
        const newTodo ={
            id:Date.now(),
            text:inputText,
            isComplete: false,
        }
        setTodoList((prev)=>[...prev,newTodo]);
        inputRef.current.value="";


    }

    const deleteTask = (id)=>{

        setTodoList((prvTodos)=>{
         return prvTodos.filter((todo)=> todo.id !== id)
        })}

        const toggle = (id) => {
            setTodoList((prevTodos) =>
                prevTodos.map((todo) => {
                    if (todo.id === id) {
                        return { ...todo, isComplete: !todo.isComplete }; // Fixed spacing and assignment
                    }
                    return todo;
                })
            );
        };
        
    useEffect(()=>{console.log(todoList);
    }, [todoList]);
    useEffect(()=>{localStorage.setItem("todos",JSON.stringify(todoList))
    }, [todoList]);
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md
    felx flex-col p-7 min-h-[550px] rounded-xl">
    
{/* title */}
<div className="flex items-center mt-7 gap-2">
    <img src={todo_icon} className="w-8"></img>
    <h1 className="text-3xl font-semibold">To-Do List</h1>
</div>
 {/* input box */}
 <div className='flex item-center my-7 bg-gray-200 rounded-full'>
    <input ref={inputRef} className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-blue-700" type="text"  placeholder="Add a new task.."/>
    <button onClick={add} className='border-none rounded-full text-white text-lg font-medium cursor-pointer bg-blue-700/90 w-32 h14'> + Add </button>
 </div>
 {/* to do list */}
 <div>

    {todoList.map((item,index)=>{
        return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTask={deleteTask} toggle={toggle}/>
    })}

 </div>

    </div>
  )
}

export default Todo 