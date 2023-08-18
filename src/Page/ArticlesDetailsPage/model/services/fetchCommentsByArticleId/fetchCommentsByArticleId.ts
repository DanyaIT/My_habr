import { ThunkConfig } from 'app/providers/StoreProvider';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Comment } from 'entities/Comment';


export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
    'articleDetails/fetchCommentsByArticleId',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi
        try {
            if(!articleId){
                return rejectWithValue('error')
            }
            const response = await extra.api.get<Comment[]>(`/comments`, {
                params: {
                    articleId,
                    _expand: 'user'
                }
            })
            console.log(response.data)
            if(!response.data){
                throw new Error()
            }
            return response.data
        } catch (error) {
            return rejectWithValue('error')
        }
    }
)

