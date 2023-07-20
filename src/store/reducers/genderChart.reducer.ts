import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import fetch from 'node-fetch';
//  *if you want to use fetch api while testing you have un comment above line.
// ? Since fetch is a web API, when we execute the test command, it runs on the Node server and not in the browser.
// ? Consequently, if you run the test command without uncommenting the above import line, it will throw an error.

interface OccupationState {
    data: any,
    loading: boolean,
    error: any
}
export const getGenderChart = createAsyncThunk(
    'genderChartSlice/getGenderChart',
    async (thunkAPI) => {
        let options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: `
            query{
                getGenderData{
                    male
                    female
                    other
                  }
            }`})
        }
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/graphql`, options);
        const text: any = await response.json();
        return text.data.getGenderData
    }
)



const initialState: OccupationState = {
    data: [],
    loading: false,
    error: null
}


const genderChartSlice = createSlice({
    name: 'occupation',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getGenderChart.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getGenderChart.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        })
        builder.addCase(getGenderChart.rejected, (state, action) => {
            state.error = action.error
            state.loading = false
        })
    }
})

export default genderChartSlice.reducer

