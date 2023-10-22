import { Country } from "entities/Country/model/types/countrySelect"
import { Currency } from "entities/Currency"
import { ValidateProfileData } from "../../const/ValidateProfileData"
import { validateProfileData } from "./validateProfileData"


const profileData = {
    first: "Danya",
    lastname: "Ocheretin",
    age: 24,
    currency: Currency.EUR,
    city: "Moscow",
    username: "Overlab",
    country: Country.Armenia,
}
describe('validateProfileData', () => {
    test('Sucess validate', () => {
        expect(validateProfileData(profileData)).toEqual([]);
    })

    test('Incorrect first and lastname', () => {
        expect(validateProfileData({...profileData, first: 'danya', lastname: ''})).toEqual([ValidateProfileData.INCORRECT_USER_DATA])
    })

    test('Incorrect age', () => {
        expect(validateProfileData({...profileData, age: NaN})).toEqual([ValidateProfileData.INCORRECT_AGE])
    })

    test('Incorrect city', () => {
        expect(validateProfileData({...profileData, city: 'moscow'})).toEqual([ValidateProfileData.INCORRECT_CITY])
    })

    test('Incorrect all', () => {
        expect(validateProfileData({})).toEqual(
            [
                ValidateProfileData.INCORRECT_USER_DATA,
                ValidateProfileData.INCORRECT_AGE,
                ValidateProfileData.INCORRECT_CITY,
                ValidateProfileData.INCORRECT_COUNTRY,
            ])
    })
})






