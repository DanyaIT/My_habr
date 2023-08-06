import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Article, ArticleDetailsShema, fetchArticleById } from "entities/Article";


const initialState: ArticleDetailsShema = {
    error:undefined,
    data: undefined,
    isLoading: false,
}

export const ArticleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder
    .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true,
        state.error = undefined
    })

    .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false,
        state.data = action.payload
    })

    .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false,
        state.error = action.payload
    })
    }
})


export const {reducer: articleDetailsReducer} = ArticleDetailsSlice
export const {actions: articleDetailsAction} = ArticleDetailsSlice
