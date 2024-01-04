import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state,action)=>{
            console.log(action.payload)
            state.items.push(action.payload);
        },
        RemoveItem: (state,action)=>{
            // state.items.pop();  
            console.log(action.payload);
            state.items.filter((temp)=> { return temp.id!=action.payload});
        },
        clearCart:(state)=>{
            state.items=[]
        }
    }
});

export const {RemoveItem, clearCart, addItem} = CartSlice.actions;

export default CartSlice.reducer;