
import { Contry, Currency } from "shared/const/common";

export interface Profile {
    first: string,
    lastname: string,
    age: number,
    currency: Currency,
    contry: Contry ,
    city: string,
    username: string,
    avatar: string
}


export interface ProfileShema {
    data?: Profile,
    isLoading: boolean,
    error?: string,
    readonly?: boolean,
}