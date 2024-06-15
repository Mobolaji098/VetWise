import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProductCart {
    id:number;
    image: string;
    name: string;
    rating: string;
    category:string;
    price: number;
    quantity:number;

}

const initialState: Array<IProductCart> = [];

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProductCart>) => {
      if (state.findIndex((pro) => pro.id === action.payload.id) === -1) {
        state.push(action.payload);
      } else {
        return state.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer
