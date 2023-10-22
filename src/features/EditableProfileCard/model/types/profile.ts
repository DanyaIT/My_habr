
import { Country } from "entities/Country/model/types/countrySelect";
import { Currency } from "entities/Currency";
import { ValidateProfileData } from "../const/ValidateProfileData";


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