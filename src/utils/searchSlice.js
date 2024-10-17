import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"Search",
    initialState:{
     searchClickeditems:[],
    },
    reducers:{
    CacheSearch:(state, action)=>{
        //state={...state,...action.payload}// we shouldnt mutate state inside the reducers 
       state=Object.assign(state,action.payload);// concatinate new object and the existing state object  
    // action.payload consists of new object values . state stores previous values 
    // we are assigning previos state and new values to the existing state 
    },
    searchClick:(state,action)=>{
        state.searchClickeditems=action.payload;
    }
},
})

export const { CacheSearch,searchClick }=searchSlice.actions;
export default searchSlice.reducer;