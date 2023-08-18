import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig, useAppDispatch } from "app/providers/StoreProvider";
import { getUserAuthData } from "entities/User";
import { getArticleDetailsData } from "entities/Article";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";




export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'ArticlesDetailsPage/addCommentForArticle',
    async(text, ThunkApi) => {

        const {extra, rejectWithValue, getState, dispatch} = ThunkApi
        const user = getUserAuthData(getState())
        const article = getArticleDetailsData(getState())
       

        if(!user || !text || !article){
            return rejectWithValue('no data')
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId:article.id,
                text,
                userId:user.id,
            })

            if(!response.data) {
                throw new Error()
            }
            dispatch(fetchCommentsByArticleId(article.id))
            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue('error')
        }
    }
)