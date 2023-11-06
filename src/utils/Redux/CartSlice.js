import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state,action)=>{
            state.items.push(action.payload)
        },
        RemoveItem: (state,action)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items=[]
        }
    }
});

// export const {addItem,RemoveItem,clearCart} = CartSlice.actions;
export const actions = CartSlice.actions;

export default CartSlice.reducer;