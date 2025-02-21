import React from 'react'
import tick from "../assets/tick.png"
import not_tick from "../assets/not_tick.png"
import delete_icon from "../assets/delete_icon.png"


const TodoItems = ({text, id, isComplete,deleteTask,toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2' >
        <div  onClick={()=>{ toggle(id)}}className='flex flex-1 items-center cursor-pointer'> 
            <img src={isComplete? tick: not_tick} alt="" className='w-7' />
            <p className={`text-blue-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through":""}`}>{text}</p>
        </div>
        <div>
            <img  onClick={()=>{deleteTask(id)}} src={delete_icon} className='w-3.5'></img>
        </div>
    </div>
  )
}

export default TodoItems