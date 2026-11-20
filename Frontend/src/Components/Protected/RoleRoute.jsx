import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Context Api/AuthContext";

function RoleRoute({ userRole }) {
    const { user } = useAuth();

    if (user?.role !== userRole) {
        return (
            <Navigate
                to={user?.role === "artist" ? "/artist" : "/"}
                replace
            />
        );
    }

    return <Outlet />;
}

export default RoleRoute