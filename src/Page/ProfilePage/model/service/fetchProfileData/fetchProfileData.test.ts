import { Country } from "entities/Country/model/type"
import { Currency } from "entities/Currency"
import { TestAsyncThunk } from "shared/lib/TestAsuncThunk/TestAsuncThunk"
import { fetchProfileData } from "./fetchProfileData"

describe('fetchProfileData', () => {
    test('Sucess response', async () => {
        const profileData = {
            first: "Danya",
            lastname: "Ocheretin",
            age: 24,
            currency: Currency.EUR,
            city: "ASDdsf",
            username: "Adsf",
            country: Country.Armenia,
        }

        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({data: profileData}))
        const result = await thunk.callThunk()

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(profileData)
    })

    test('Error state', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({status: 403}))
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(thunk.api.get).toHaveBeenCalled();
    })
})