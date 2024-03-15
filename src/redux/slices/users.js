import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UsersDataService from "../../services/auth.service";

const initialState = [];

export const retrieveUsers = createAsyncThunk(
    "users/retrieve",
    async () => {
        const res = await UsersDataService.getAll();
        // console.log("res---->", res);
        return res;
    }
);

const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(retrieveUsers.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

const { reducer } = usersSlice;
export default reducer;