import {
        createReducer
      } from '@reduxjs/toolkit';
    import { getPayment } from './action';
      
      export type PaymentState = {
        data: any;
        pending: boolean;
        error: boolean;
      };
      
      const initialState: PaymentState = {
        data: {} as any,
        pending: false,
        error: false,
      };
      
      export const paymentReducer = createReducer(initialState, builder => {
        builder
        .addCase(getPayment.pending, state => {
          state.pending = true;
        })
        .addCase(getPayment.fulfilled, (state, { payload }) => {
          state.pending = false;
          state.data = payload;
        })
        .addCase(getPayment.rejected, state => {
          state.pending = false;
          state.error = true;
        });
      });
    
      export default paymentReducer
    