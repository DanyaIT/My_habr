import { composeStories } from "@storybook/react"
import { UserRole, getUserAuthData, getUserRole } from "entities/User"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"

interface RequireAuthProps {
    children: JSX.Element,
    roles?: UserRole[],
}

export const RequireAuth = (props: RequireAuthProps) => {
    const { children, roles } = props;
    const isAuth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRole)


    const hasRequiredRoles = useMemo(() => {
        if(!roles){
            return true
        }

        return roles.some(userRole => {
            return userRoles?.includes(userRole)
            
        })
    }, [roles, userRoles])

    if (!isAuth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to = {RoutePath.forbidden} state={{ from: location }} replace/>
    }

    return children
}