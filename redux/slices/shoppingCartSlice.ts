import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type ProductAtCart = {
  name: string,
  price: number,
  imageSrc: {
    src: string,
    height: number,
    width: number,
    blurDataURL: string,
    blurWidth: number,
    blurHeight: number
  },
  size: string,
  color: string,
  quantity: number
}

interface CartType {
  products: ProductAtCart[],
}

const initialState: CartType = {
  products: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      //if state already has the product add 1 in quantity
      if (state.products.some(item => item.name === action.payload.name && item.size === action.payload.size && item.color === action.payload.color)) {
        const { name, size, color } = action.payload
        const index = state.products.findIndex(obj => obj.name === name && obj.color === color && obj.size === size);
        state.products[index].quantity++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeOneProduct: (state, action) => {
      const { name, size, color } = action.payload
      const index = state.products.findIndex(obj => obj.name === name && obj.color === color && obj.size === size);
      if (state.products[index].quantity > 1) {
        state.products[index].quantity--
      } else {
        state.products.splice(index, 1);
      }
    },
    removeProduct: (state, action) => {
      const { name, size, color } = action.payload
      const index = state.products.findIndex(obj => obj.name === name && obj.color === color && obj.size === size);
      state.products.splice(index, 1);
    }
  },
})

export const { addProduct, removeOneProduct, removeProduct } = cartSlice.actions

export const productsArray = (state: RootState) => state.cart.products

export default cartSlice.reducer;

