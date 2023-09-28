import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageShema } from "../types";
import { articleDetailsPageRecomentationsReducer } from "./ArticleDetailsPageRecomendationSlice";
import { articleDetailsPageCommentReducer } from "./ArticleDetailsCommentSlice";


export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageShema>({
    recomendations: articleDetailsPageRecomentationsReducer,
    comments: articleDetailsPageCommentReducer,
})