import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    // slice can have multiple reducers
    reducers: {
        addItem: (state, action) => {
            // mutating the state here
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop()
        },
        // originalState = ["pizza"]
        clearCart: (state) => {
            // items = [] will not work here, because, it will just change the reference of it and not actually mutate the state
            // example:
            //console.log(current(state)) //["pizza"] //to print state import current from reduxjs/toolkit
            //console.log(originalState) //["pizza"]
            // state = []
            //console.log(current(state)) //[]
            //console.log(originalState) //["pizza"]
            state.items.length = 0 // []
            // or we can also return the new state
            // return {items: []}
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;