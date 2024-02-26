import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";


function ProtectedRoute({ redirectPath = '/login', children }) {
const { currentUser } = useUserContext();

if (!currentUser.email) {
return <Navigate to={redirectPath} replace />;
}

return children ? children : <Outlet/>;
}
export default ProtectedRoute