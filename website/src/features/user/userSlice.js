import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user : undefined
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeUser: (state, action) => {
            state.user = action.payload;
        },
        disconnect: (state) => {
            state.user = undefined
            fetch('http://localhost:4005/users/logout', { credentials: 'include' })
        }
    }
})

export const {changeUser, disconnect} = userSlice.actions;

export default userSlice.reducer;