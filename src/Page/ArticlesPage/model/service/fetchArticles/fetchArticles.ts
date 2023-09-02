import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { getArticlePage, getArticlePageLimit } from "../../selectors/getArticlePageState/ArticleViewSelector";

interface fetchArticlesProps {
    page: number,
}

export const fetchArticles = createAsyncThunk<Article[], fetchArticlesProps, ThunkConfig<string>>(
    'ArticlePage/fetchArticles',
    async (props, thunkApi) => {
        const {page = 1} = props
        const { extra, rejectWithValue, getState } = thunkApi
        const limit = getArticlePageLimit(getState())
        try {

            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
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