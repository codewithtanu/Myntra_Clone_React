import {createSlice} from "@reduxjs/toolkit"; 
import { Default_Items } from "../data/items";
const itemsSlice=createSlice({
    name:"items",
    initialState:Default_Items,
    reducers:{
        addInitialItems:(store,action)=>{
            return store;
        }
    }
})
export const itemsAction=itemsSlice.actions;
export default itemsSlice