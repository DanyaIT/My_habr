import {
    createSlice,
    createEntityAdapter,
    PayloadAction
  } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment'
import { ArticleDetailsPageCommentSchema } from '../types/ArticleDetailsPageCommentSchema';
import { fetchCommentsByArticleId } from 'Page/ArticlesDetailsPage';

  
  const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id
  })
  

  export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
  )

  
  const articleDetailsCommentSlice = createSlice({
    name: 'ArticleDetailsCommentSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsPageCommentSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {
     
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCommentsByArticleId.pending, (state, action) => {
            state.error = undefined
            state.isLoading = true
        })
        .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
            state.isLoading = false
            commentsAdapter.setAll(state, action.payload)
        })
        .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
    
  })

export const {reducer: articleDetailsPageCommentReducer} = articleDetailsCommentSlice
