import React,{useSate,} from'react';
import {useDispATCH} from 'react-reducx';

  const[title,setTittle]=useState(')

const  task=async  ()=>{
  if(title.trim()=='') return '';
  const newTASK={id:Date.now(),title,completed:false},
  const savedTask=await addTestAPI(newTask);
  dispatch(addTask(savedTask));
  setTittle('')
  return(
    <div class='taskInput'> 
    <input
    type='text'
    placeHolder='Please enter the task',
    onChange={(e)=>setTitile(e.target.value)
    />
    </div>
  )
  
}

