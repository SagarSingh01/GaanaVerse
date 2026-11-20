import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Context Api/AuthContext";
import Loading from "./Loading";

function ProtectedRoute() {

    const { user, loading } = useAuth();

    if (loading) return <Loading />

    return user ? <Outlet /> : <Navigate to="/login" />
};

export default ProtectedRoute