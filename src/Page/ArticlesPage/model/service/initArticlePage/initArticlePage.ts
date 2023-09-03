import { getArticleInited, getArticlePage } from './../../selectors/getArticlePageState/ArticleViewSelector';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { articlePageAction } from '../../slice/ArticlePageSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';






export const initArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'ArticlePage/initArticlePage',
    async (_, thunkApi) => {
        const {getState, dispatch} = thunkApi

        const inited = getArticleInited(getState())

        if(!inited){
            dispatch(articlePageAction.initState())
            dispatch(fetchArticles({page: 1}))
        }
    }
)