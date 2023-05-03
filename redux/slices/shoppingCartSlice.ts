import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

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

//CREATE NEW PRODUCT OBJECT JUST WITH NAME, IMAGE, SIZE AND COLOR...


export const cartSlice = createSlice({
    name: 'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      addProduct: (state, action) => {
        state.products.push(action.payload);
      },
      removeProduct: (state, action) => {
        state.products = state.products.filter((product) => product.name !== action.payload.name && product.size !== action.payload.size && product.color !== action.payload.color);
      }
    },
  })
  
  export const { addProduct, removeProduct } = cartSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  export const productsArray = (state: RootState) => state.cart.products
  
  export default cartSlice.reducer;

