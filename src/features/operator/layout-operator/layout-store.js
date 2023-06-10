import { createSlice } from '@reduxjs/toolkit';

const layoutStore = createSlice({
    name: 'layout-store',
    initialState: {
        title: '',
        titleText: ''
    },
    reducers: {
        setTitle: (state, actions) => state.title = actions.payload,
        setTitleText: (state, actions) => state.titleText = actions.payload
    }
})

export const { setTitle, setTitleText } = layoutStore.actions
export default layoutStore.reducer