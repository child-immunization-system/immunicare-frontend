import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
    const auth = JSON.parse(localStorage.getItem("auth"));

    // Handle the case where auth is null
    if (!auth || !auth.user) {
        return <Navigate to="/login/" />;
    }

    return <>{children}</>;
}

export default ProtectedRoutes;
