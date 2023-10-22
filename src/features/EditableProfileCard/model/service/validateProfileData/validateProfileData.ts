import { ValidateProfileData } from "../../const/ValidateProfileData";
import { Profile} from "../../types/profile";

export const validateProfileData = (profile?:Profile) => {
    if(!profile) {
        return []
    }
    
    const {first, lastname, age, country, city} = profile
    const errors:ValidateProfileData[] = [];

    if(!first || !lastname){
        errors.push(ValidateProfileData.INCORRECT_USER_DATA)
    }

    if(!age || !Number.isInteger(age)){
        errors.push(ValidateProfileData.INCORRECT_AGE)
    }
    if(!city || (city[0] !== city[0].toLocaleUpperCase())){
        errors.push(ValidateProfileData.INCORRECT_CITY)
    }

    if(!country){
        errors.push(ValidateProfileData.INCORRECT_COUNTRY)
    }


    return errors
}