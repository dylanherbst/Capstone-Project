import { Route, Routes } from "react-router-dom";
import LoginForm from "../Pages/LoginPage";
import CreateProfilePage from "../Pages/CreateProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import UserAccountPage from "../Pages/UserAccountPage";

function AppRoutes(props) {
  return (
    <Routes>
      {/* <Route
        index
        element={
          <ProtectedRoute>
            <DashBoardPage {...props} />
          </ProtectedRoute>
        }
      /> */}
      {/* <Route
        path="/:id"
        element={
          <ProtectedRoute>
            <ShowPage />
          </ProtectedRoute>
        }
      /> */}
      {/* <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <CreateProfilePage />
          </ProtectedRoute>
        }
      /> */}

      <Route path="/createuser" element={<CreateProfilePage />} />
      <Route path="/account" element={<UserAccountPage />} />

      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default AppRoutes;
