
export {ProfilePageAsync as ProfilePage } from './ui/ProfilePage.async'
export { fetchProfileData } from '../../Page/ProfilePage/model/service/fetchProfileData/fetchProfileData'
export { updateProfileData } from '../../Page/ProfilePage/model/service/updateProfileData/updateProfileData'
export {Profile, ProfileShema} from '../../Page/ProfilePage/model/types/profile'
export {profileReducer, profileAction} from '../../Page/ProfilePage/model/slice/ProfileSlice'

export {getProfileData} from './model/selectors/getProfileData'
export {getProfileError} from './model/selectors/getProfileError'
export {getProfileIsLoading} from './model/selectors/getProfileIsLoading'
export {getProfileReadonly} from './model/selectors/getProfileReadonly'
export {getProfileDataForm} from './model/selectors/getProfileDataForm'

