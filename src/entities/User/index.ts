import { userActions, userReducer } from './model/slice/UserSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInitData } from './model/selectors/getUserInitData/getUserInitData';
import { isUserAdmin, isUserManager, getUserRole} from './model/selectors/getUserRole/getUserRole';

export {UserRole} from './model/consts/consts'
export {userActions, userReducer, getUserAuthData, getUserInitData, isUserAdmin, isUserManager, getUserRole}
export type { UserSchema, User} from './model/types/UserSchema'
