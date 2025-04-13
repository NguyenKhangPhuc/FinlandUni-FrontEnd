

import { createSlice } from "@reduxjs/toolkit";
import { University } from "../types/universities";

const universitiesSlice = createSlice({
    name: 'universities',
    initialState: Array<University>,
    reducers: {
        setUniversities: (state, action) => {
            return action.payload
        }
    }
})

export const { setUniversities } = universitiesSlice.actions
export default universitiesSlice.reducer