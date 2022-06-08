import {
        createReducer
      } from '@reduxjs/toolkit';
    import { getProduct } from './action';
      
      export type ProductState = {
        data: any;
        pending: boolean;
        error: boolean;
      };
      
      const initialState: ProductState = {
        data: {} as any,
        pending: false,
        error: false,
      };
      
      export const productReducer = createReducer(initialState, builder => {
        builder
        .addCase(getProduct.pending, state => {
          state.pending = true;
        })
        .addCase(getProduct.fulfilled, (state, { payload }) => {
          state.pending = false;
          state.data = payload;
        })
        .addCase(getProduct.rejected, state => {
          state.pending = false;
          state.error = true;
        });
      });
    
      export default productReducer
    