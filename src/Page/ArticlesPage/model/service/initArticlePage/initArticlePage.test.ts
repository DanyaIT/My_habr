
import { TestAsyncThunk } from "shared/lib/TestAsuncThunk/TestAsuncThunk"
import { initArticlePage } from "./initArticlePage"
import { ArticlesView } from "entities/Article"
import { fetchArticles } from "../fetchArticles/fetchArticles"

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
                _inited: true,
            }
        });
        await thunk.callThunk()

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
                _inited: false,
            }
        });
        await thunk.callThunk()

        expect(fetchArticles).toHaveBeenCalled()
        expect(thunk.dispatch).toHaveBeenCalledTimes(4)
    })
})