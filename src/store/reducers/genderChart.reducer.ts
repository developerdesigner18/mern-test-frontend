import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


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
        const text = await response.json();
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
        builder.addCase(getGenderChart.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export default genderChartSlice.reducer

