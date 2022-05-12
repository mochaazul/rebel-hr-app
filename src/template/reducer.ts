export const generateReducer = (name:string) => {
  const valueName = name.charAt(0).toUpperCase() + name.slice(1);
  const funcName = `get${valueName}`
    return `import {
        createReducer
      } from '@reduxjs/toolkit';
    import { ${funcName} } from './action';
      
      export type ${valueName}State = {
        data: any;
        pending: boolean;
        error: boolean;
      };
      
      const initialState: ${valueName}State = {
        data: { quote: 'click that button' } as any,
        pending: false,
        error: false,
      };
      
      export const ${name}Reducer = createReducer(initialState, builder => {
        builder
        .addCase(${funcName}.pending, state => {
          state.pending = true;
        })
        .addCase(${funcName}.fulfilled, (state, { payload }) => {
          state.pending = false;
          state.data = payload;
        })
        .addCase(${funcName}.rejected, state => {
          state.pending = false;
          state.error = true;
        });
      });
    
      export default ${name}Reducer
    `
}