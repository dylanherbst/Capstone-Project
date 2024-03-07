import { Route, Routes } from "react-router-dom";
import LoginForm from "../Pages/LoginPage";
import CreateProfilePage from "../Pages/CreateProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import UserAccountPage from "../Pages/UserAccountPage";
import DashBoardPage from "../Pages/DashBoardPage";
import ProductsPage from "../Pages/ProductPage";
import CreateProductPage from "../Pages/CreateProductPage";
import AdminPage from "../Pages/AdminListPage";

function AppRoutes(props) {
  return (
    <Routes>
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <CreateProfilePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/createproduct"
        element={
          <ProtectedRoute>
            <CreateProductPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/createuser"
        element={
          <ProtectedRoute>
            {" "}
            <CreateProfilePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/account"
        element={
          <ProtectedRoute>
            <UserAccountPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashBoardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <ProductsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admins"
        element={
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default AppRoutes;
