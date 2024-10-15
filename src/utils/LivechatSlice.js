import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const ChatSlice=createSlice(
    {
        name:"Chat",
        initialState:{
            messages:[]
        },
        reducers:{
          addMessages:(state,action)=>{
            state.messages.splice(LIVE_CHAT_COUNT,1);// remove one msg from top after 25 msgs
            state.messages.unshift(action.payload);
          }
        }
    }
);
export const { addMessages }=ChatSlice.actions;
export default ChatSlice.reducer;