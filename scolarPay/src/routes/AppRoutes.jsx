import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/public/Home";
import Login from "../pages/auth/Login";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import ParentDashboard from "../pages/dashboard/ParentDashboard";
import StudentsList from "../pages/admin/StudentsList";
import StudentDetails from "../pages/admin/StudentDetails";
import AddPayment from "../pages/payments/AddPayment";
import PaymentsList from "../pages/payments/PaymentsList";
import PaymentsHistory from "../pages/parent/PaymentsHistory";
import NotFound from "../pages/public/NotFound";
import MainLayout from "../components/layout/MainLayout";
import AdminLayout from "../components/layout/AdminLayout";
import ParentLayout from "../components/layout/ParentLayout";
import { useAuth } from "../hooks/useAuth";

function PrivateRoute({ children, allowedRoles }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Admin */}
        <Route
          path="/dashboard/admin"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/etudiants"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <StudentsList />
              </AdminLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/etudiants/:id"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <StudentDetails />
              </AdminLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/versements/nouveau"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <AddPayment />
              </AdminLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/versements"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <PaymentsList />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        {/* Parent */}
        <Route
          path="/dashboard/parent"
          element={
            <PrivateRoute allowedRoles={["parent"]}>
              <ParentLayout>
                <ParentDashboard />
              </ParentLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/parent/versements"
          element={
            <PrivateRoute allowedRoles={["parent"]}>
              <ParentLayout>
                <PaymentsHistory />
              </ParentLayout>
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default AppRoutes;

