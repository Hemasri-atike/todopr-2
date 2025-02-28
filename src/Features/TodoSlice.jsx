import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:'todo',
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
            state.push(action.payload)
        },
        deleteTodo:(state,action)=>{
          return state.filter(todo=>todo.id!==action.payload)
        },
        editTodo:(state,action)=>{
            const {id,text}=action.payload
            const edited=state.find(todo=>todo.id===id)
            if(edited){
                edited.text=text
            }
        }
    }
})
export const{addTodo,deleteTodo,editTodo}=todoSlice.actions
export default todoSlice.reducer