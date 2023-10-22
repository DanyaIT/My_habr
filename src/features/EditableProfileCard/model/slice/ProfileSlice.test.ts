
import { DeepPartial } from "@reduxjs/toolkit"
import { profileAction, profileReducer } from "./ProfileSlice"
import { ProfileShema } from "../types/profile"
import { Country } from "entities/Country/model/types/countrySelect"
import { Currency } from "entities/Currency"
import { updateProfileData } from "../service/updateProfileData/updateProfileData"
import { ValidateProfileData } from "../const/ValidateProfileData"

const profileData = {
    id:'1',
    first: "Danya",
    lastname: "Ocheretin",
    age: 24,
    currency: Currency.EUR,
    city: "ASDdsf",
    username: "Adsf",
    country: Country.Armenia,
}


describe('ProfileSlice', () => {
    
    test('setReadonly', () => {
        const state: DeepPartial<ProfileShema> = {readonly: true}
        expect(profileReducer(state as ProfileShema, profileAction.setReadonly(false))).toEqual({readonly:false})
    })

    test('resetProfile', () => {
        const state: DeepPartial<ProfileShema> = {data: profileData, form: {lastname: ''}}
        expect(profileReducer(state as ProfileShema, profileAction.resetProfile())).toEqual({
            data: profileData,
            form: profileData,
            readonly: true,
            validateError:undefined,
        })
    })

    test('updateProfile', () => {
        const state: DeepPartial<ProfileShema> = {form: {username: '123'}}
        expect(profileReducer(state as ProfileShema, profileAction.updateProfile({username: 'Nikita'}))).toEqual({
            validateError:undefined,
            form: {username: 'Nikita'}
        })
    })

    test('updateProfileData.pending', () => {
        const state: DeepPartial<ProfileShema> = {isLoading: false, validateError:[ValidateProfileData.INCORRECT_AGE]}
        expect(profileReducer(state as ProfileShema, updateProfileData.pending)).toEqual({
            validateError:undefined,
            isLoading: true
        })
    })

    test('updateProfileData.fulfilled', () => {
        const state: DeepPartial<ProfileShema> = {data: profileData}
        expect(profileReducer(state as ProfileShema, updateProfileData.fulfilled(profileData, ''))).toEqual({
            isLoading: false,
            data: profileData,
            form: profileData,
            readonly: true,
            valodateError: undefined,
        })
    })

    test('updateProfileData.rejected', () => {
        const state: DeepPartial<ProfileShema> = {isLoading: true}
        expect(profileReducer(state as ProfileShema, updateProfileData.rejected)).toEqual({
            validateError: undefined,
            isLoading: false
        })
    })

})