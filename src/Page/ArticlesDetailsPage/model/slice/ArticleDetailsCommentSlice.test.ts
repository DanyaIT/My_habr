import { DeepPartial } from "@reduxjs/toolkit"
import { ArticleDetailsCommentSchema } from "../types/ArticleDetailsCommentSchema"
import {articleDetailsCommentReducer } from "./ArticleDetailsCommentSlice"
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId"

describe('articleDetailsCommentSlice', () => {
    test('fetchCommentsByArticleId.pending', () => {
        const state: DeepPartial<ArticleDetailsCommentSchema> = {
            isLoading:false,
        }
        expect(articleDetailsCommentReducer(state as ArticleDetailsCommentSchema, 
            fetchCommentsByArticleId.pending)).toEqual({isLoading: true})
       
    })
//Пока пропущу
    // test('fetchCommentsByArticleId.fulfilled', () => {
    //     const state: DeepPartial<ArticleDetailsCommentSchema> = {
    //         ids: [],
    //         entities: {},
    //     }
    //     expect(articleDetailsCommentReducer(state as ArticleDetailsCommentSchema, 
    //         fetchCommentsByArticleId.fulfilled)).toEqual({ids: ['1'], entities: {
    //             id: "1",
    //             articleId: "1",
    //             text: "some text 1",
    //             userId: "1"
    //         }})
       
    // })

  

})