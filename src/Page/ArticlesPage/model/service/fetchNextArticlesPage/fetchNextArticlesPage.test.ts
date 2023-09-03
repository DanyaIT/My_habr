import { TestAsyncThunk } from "shared/lib/TestAsuncThunk/TestAsuncThunk"
import { fetchNextArticlesPage } from "./fetchNextArticlesPage"
import { fetchArticles } from "../fetchArticles/fetchArticles"
import { ArticlesView } from "entities/Article"

jest.mock('../fetchArticles/fetchArticles')

describe('fetchNextArticlesPage', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlePage: {
                isLoading: false,
                hasMore: true,
                ids: [],
                entities: {},
                page: 2,
                limit: 5,
                view: ArticlesView.LIST,
                _inited: false,
            }
        })
        await thunk.callThunk()

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticles).toHaveBeenCalledTimes(1);
        expect(fetchArticles).toHaveBeenCalledWith({ page: 3 })
    }),

        test('not called', async () => {

            const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
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

            await thunk.callThunk();
            expect(thunk.dispatch).toBeCalledTimes(2);
            expect(fetchArticles).not.toHaveBeenCalled();
        }),

        test('isLoading', async () => {
            const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
                articlePage: {
                    isLoading: true,
                    hasMore: true,
                    ids: [],
                    entities: {},
                    page: 2,
                    limit: 5,
                    view: ArticlesView.LIST,
                    _inited: false,
                }
            })
            await thunk.callThunk()

            expect(thunk.dispatch).toBeCalledTimes(2);
            expect(fetchArticles).not.toHaveBeenCalled()
        })
})