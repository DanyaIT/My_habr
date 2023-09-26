import { useRef } from 'react';

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article, ArticleType } from "entities/Article";
import { getArticleOrder, getArticlePage, getArticlePageLimit, getArticleSearch, getArticleSort, getArticleType } from "../../selectors/getArticlePageState/ArticleViewSelector";
import { addQueryParams } from 'shared/url/addQueryParams/addQueryParams';


interface fetchArticlesProps {
    repalce?: boolean
}

export const fetchArticles = createAsyncThunk<Article[], fetchArticlesProps, ThunkConfig<string>>(
    'ArticlePage/fetchArticles',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi
        const limit = getArticlePageLimit(getState())
        const order = getArticleOrder(getState())
        const sort = getArticleSort(getState())
        const search = getArticleSearch(getState())
        const page = getArticlePage(getState())
        const type = getArticleType(getState())

        try {
            addQueryParams({
                sort, order, search, type
            })
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleType.ALL? undefined : type
                }
            })

            if (!response.data) {
                throw new Error()
            }
            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue('error')
        }

    }
)