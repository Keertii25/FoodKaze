import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state,action)=>{
            state.items.push(action.payload);
        },
        RemoveItem: (state,action)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items=[]
        }
    }
});

export const {RemoveItem, clearCart, addItem} = CartSlice.actions;

export default CartSlice.reducer;