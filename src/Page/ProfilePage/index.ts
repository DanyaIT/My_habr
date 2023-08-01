import { validateProfileData } from './model/service/validateProfileData/validateProfileData';

export {ProfilePageAsync as ProfilePage } from './ui/ProfilePage.async'
export { fetchProfileData } from '../../Page/ProfilePage/model/service/fetchProfileData/fetchProfileData'
export { updateProfileData } from '../../Page/ProfilePage/model/service/updateProfileData/updateProfileData'
export {Profile, ProfileShema, ValidateProfileData} from '../../Page/ProfilePage/model/types/profile'
export {profileReducer, profileAction} from '../../Page/ProfilePage/model/slice/ProfileSlice'

export {getProfileValidateData} from './model/selectors/getProfileValidateData/getProfileValidateData'
export {getProfileData} from './model/selectors/getProfileData/getProfileData'
export {getProfileError} from './model/selectors/getProfileError/getProfileError'
export {getProfileIsLoading} from './model/selectors/getProfileIsLoading/getProfileIsLoading'
export {getProfileReadonly} from './model/selectors/getProfileReadonly/getProfileReadonly'
export {getProfileDataForm} from './model/selectors/getProfileDataForm/getProfileDataForm'

