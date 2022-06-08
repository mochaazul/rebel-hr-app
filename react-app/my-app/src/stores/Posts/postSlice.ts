import { createSlice } from '@reduxjs/toolkit';

import { localStorage, history } from 'helpers';
import { PostDetail } from 'interface';

const initialState = {
    posts: [] as unknown as PostDetail
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getPost: (state, action) => {
            //    state.posts = []
        }
    }
});

export const { getPost } = userSlice.actions;
