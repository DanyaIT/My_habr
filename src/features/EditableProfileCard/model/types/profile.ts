import { validateProfileData } from './../service/validateProfileData/validateProfileData';

import { Country } from "entities/Country/model/types/countrySelect";
import { Currency } from "entities/Currency";


export enum ValidateProfileData {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = "INCORRECT_AGE",
    INCORRECT_COUNTRY = "INCORRECT_COUNTRY",
    INCORRECT_SERVER = 'INCORRECT_SERVER',
    INCORRECT_DATA = 'INCORRECT_DATA',
    INCORRECT_CITY = "INCORRECT_CITY"

}

export interface Profile {
    id?:string,
    first?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string,
}


export interface ProfileShema {
    data?: Profile,
    form?: Profile,
    isLoading?: boolean,
    error?: string,
    readonly?: boolean,
    validateError?: ValidateProfileData[]
}