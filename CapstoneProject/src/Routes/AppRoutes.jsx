import { Route, Routes } from "react-router-dom";
import LoginForm from "../Pages/LoginPage";
import CreateProfilePage from "../Pages/CreateProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import UserAccountPage from "../Pages/UserAccountPage";
import DashBoardPage from "../Pages/DashBoardPage";
import ProductsPage from "../Pages/ProductPage";

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
      <Route path="/dashboard" element={<DashBoardPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/" element={<ProductsPage />} />
    </Routes>
  );
}

export default AppRoutes;
