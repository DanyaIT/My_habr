import { Country } from "entities/Country/model/types/countrySelect"
import { Currency } from "entities/Currency"
import { TestAsyncThunk } from "shared/lib/TestAsuncThunk/TestAsuncThunk"
import { updateProfileData } from "./updateProfileData"
import { ValidateProfileData } from "../../types/profile"

const profileData = {
    first: "Danya",
    lastname: "Ocheretin",
    age: 24,
    currency: Currency.EUR,
    city: "ASDdsf",
    username: "Adsf",
    country: Country.Armenia,
}
describe('udateProfileData', () => {
    test('Sucess response', async () => {

        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: profileData
            }
        })

        thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }))
        const result = await thunk.callThunk()

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(profileData)
    })

    test('Error server', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: profileData
            }
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.payload).toEqual([ValidateProfileData.INCORRECT_SERVER])
    })

    test('Validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...profileData, first: '', age: 0 }
            }
        })
        const result = await thunk.callThunk()
        expect(result.payload).toEqual(
            [ValidateProfileData.INCORRECT_USER_DATA,
            ValidateProfileData.INCORRECT_AGE
            ])
    })
})