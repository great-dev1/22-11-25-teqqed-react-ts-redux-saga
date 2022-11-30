import { createSlice } from "@reduxjs/toolkit"

interface SearchState {
    sortBy: string;
    filterBy: string;
    searchWord: string;
    result: any[];
    loading: boolean;
}

const initialState: SearchState = {
    sortBy: "Highest price",
    filterBy: "Villa",
    searchWord: "",
    result: [],
    loading: false
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSortBy: (state, action) => {
            state.sortBy = action.payload
        },
        setFilterBy: (state, action) => {
            state.filterBy = action.payload
        },
        setSearchWord: (state, action) => {
            state.searchWord = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setResult: (state, action) => {
            state.result = [...action.payload]
        }
    }
})

export const { setSortBy, setFilterBy, setSearchWord, setLoading, setResult } = searchSlice.actions

export default searchSlice.reducer
