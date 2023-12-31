import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import fetch from 'node-fetch';
//  *if you want to use fetch api while testing you have un comment above line.
// ? Since fetch is a web API, when we execute the test command, it runs on the Node server and not in the browser.
// ? Consequently, if you run the test command without uncommenting the above import line, it will throw an error.
interface AgeCountState {
    data: any,
    loading: boolean,
    error: any
}
export const getAgeCount = createAsyncThunk(
    'ageCountSlice/getAgeCount',
    async (thunkAPI): Promise<any> => {
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
        const text: any = await response.json();
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
        builder.addCase(getAgeCount.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAgeCount.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        })
        builder.addCase(getAgeCount.rejected, (state, action) => {
            state.error = action.error
            state.loading = false
        })
    }
})

export default ageCountSlice.reducer

