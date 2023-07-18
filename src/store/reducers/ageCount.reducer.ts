import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


interface AgeCountState {
    data: any,
    loading: boolean,
    error: any
}
export const getAgeCount = createAsyncThunk(
    'ageCountSlice/getAgeCount',
    async (thunkAPI) => {
        let options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: `
            query{
                getAgeCountData{
                    teen
                    adult
                    senior
                  }
            }`})
        }
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/graphql`, options);
        const text = await response.json();
        return text.data.getAgeCountData
    }
)



const initialState: AgeCountState = {
    data: [],
    loading: false,
    error: null
}


const ageCountSlice = createSlice({
    name: 'ageCount',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getAgeCount.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export default ageCountSlice.reducer

