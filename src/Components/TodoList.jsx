import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoClose } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { addTodo, deleteTodo, editTodo } from '../Features/TodoSlice'

const TodoList = () => {
    const[text,setText]=useState('')
    const[edit,setEdit]=useState()
    const todos=useSelector((state)=>state.todo)
    const dispatch=useDispatch()

    const handleAddTodo=()=>{
        if(text.trim()){
          if(edit){
            dispatch(editTodo({id:edit,text}))
            setEdit(null)
          }else{
            dispatch(addTodo({id:Date.now(),text}))
          }
          setText('')
        }
    }
    const handleEdit=(todo)=>{
        setText(todo.text)
        setEdit(todo.id)
    }
    const handleDelete=(id)=>{
        dispatch(deleteTodo(id))
    }
  return (
    <div className='container'>
      <h1 className='head'>Todo List</h1>
      <input type='text'onChange={(e)=>setText(e.target.value)} value={text} placeholder="Type...." className='input-list'/>
      <button className='add' onClick={handleAddTodo}>{edit?<MdEdit />:<IoMdAdd />}</button>
      <ul>
        {todos.map((todo)=>(
            <p key={todo.id} className='text-id'>
                {todo.text}
                <button className='edit' onClick={()=>handleEdit(todo)}><MdEdit /></button>
                <button className='delete' onClick={()=>handleDelete(todo.id)}><IoClose /></button>
            </p>
        ))}
      </ul>
    </div>
  )
}

export default TodoList