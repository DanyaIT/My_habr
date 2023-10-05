
import { TestAsyncThunk } from "shared/lib/TestAsuncThunk/TestAsuncThunk"
import { initArticlePage } from "./initArticlePage"
import { ArticlesView, getArticleDetailsData } from "entities/Article"
import { fetchArticles } from "../fetchArticles/fetchArticles"
import { ArticleSortField, ArticleType } from "entities/Article/model/types/article"
import { useSelector } from "react-redux"

jest.mock('../fetchArticles/fetchArticles')

describe('initArticlePage', () => {
    test('with inited', async () => {
        const thunk = new TestAsyncThunk(initArticlePage, {
            articlePage: {
                isLoading: false,
                hasMore: false,
                ids: [],
                entities: {},
                page: 2,
                limit: 5,
                view: ArticlesView.LIST,
                sort: ArticleSortField.CREATED,
                search: '',
                order: 'asc',
                _inited: true,
                type: ArticleType.ALL
            }
        });
        await thunk.callThunk({} as URLSearchParams)

        expect(fetchArticles).not.toBeCalled()
    })

    test('without inited', async () => {
        const thunk = new TestAsyncThunk(initArticlePage, {
            articlePage: {
                isLoading: false,
                hasMore: false,
                ids: [],
                entities: {},
                page: 2,
                limit: 5,
                view: ArticlesView.LIST,
                sort: ArticleSortField.CREATED,
                search: '',
                order: 'asc',
                _inited: false,
                type: ArticleType.ALL
            }
        });

        
        await thunk.callThunk({} as URLSearchParams)

        expect(fetchArticles).toHaveBeenCalled()
        expect(thunk.dispatch).toHaveBeenCalledTimes(4)
    })
})