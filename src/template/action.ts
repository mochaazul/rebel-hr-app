export const generateAction = (name:string) => {
    const valueName = name.charAt(0).toUpperCase() + name.slice(1);
    const funcName = `get${valueName}`
    return `import {
        createAsyncThunk,
      } from '@reduxjs/toolkit';
    import { network } from 'data/api';
    
    export const ${funcName} = createAsyncThunk('${funcName}/post', async () => {
        const response = await network('https://api.kanye.rest/', {method:'GET'})
    
        return response
    });
    `
}