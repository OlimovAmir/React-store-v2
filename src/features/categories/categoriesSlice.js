import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


export const getCategories = createAsyncThunk(
    "categories/getCategories",
    async (_, thunkAPI)=>{
        try {
            const res = await axios(``)
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error)
        }
    }
)

  const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
      },
  })