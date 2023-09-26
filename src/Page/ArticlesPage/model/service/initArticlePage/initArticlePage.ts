import { getArticleInited, getArticlePage } from './../../selectors/getArticlePageState/ArticleViewSelector';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { articlePageAction } from '../../slice/ArticlePageSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article';






export const initArticlePage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'ArticlePage/initArticlePage',
    async (searchParams, thunkApi) => {
        const {getState, dispatch} = thunkApi

        const inited = getArticleInited(getState())

        if(!inited){
            const orderFromUrl = searchParams.get('order') as SortOrder
            const sortFromUrl = searchParams.get('sort') as ArticleSortField
            const searchFromUrl = searchParams.get('search')
            const typeFromUrl = searchParams.get('type') as ArticleType
        
            if(orderFromUrl){
                dispatch(articlePageAction.setOrder(orderFromUrl))
            }
            if(sortFromUrl){
                dispatch(articlePageAction.setSort(sortFromUrl))
            }

            if(searchFromUrl){
                dispatch(articlePageAction.setSearch(searchFromUrl))
            }

            if(typeFromUrl){
                dispatch(articlePageAction.setType(typeFromUrl))
            }

            dispatch(articlePageAction.initState())
            dispatch(fetchArticles({}))
        }
    }
)