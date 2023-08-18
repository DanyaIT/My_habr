import { TestAsyncThunk } from "shared/lib/TestAsuncThunk/TestAsuncThunk"
import { fetchCommentsByArticleId } from "./fetchCommentsByArticleId"

const profileData = {
    id: "1",
    first: "Danya",
    lastname: "Ocheretin",
    age: 24,
    currency: "USD",
    contry: "Russia",
    city: "Moscow",
    username: "Overlab",
    avatar: "https://adiariocr.com/wp-content/uploads/2018/06/Cibercrimen4.jpg",
    country: "Belarus"
  }

describe('fetchCommentsByArticleId', () => {
    test('Sucess response', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId)
        thunk.api.get.mockReturnValue(Promise.resolve({data: profileData}))
        const result = await thunk.callThunk(profileData.id)

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(profileData)
    })

    test('Error state', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId)
        thunk.api.get.mockReturnValue(Promise.resolve({status: 403}))
        const result = await thunk.callThunk(profileData.id)

        expect(result.meta.requestStatus).toBe('rejected')
        expect(thunk.api.get).toHaveBeenCalled();
    })
})