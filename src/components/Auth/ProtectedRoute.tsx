import { Navigate } from "react-router-dom";

import type { PropsWithChildren } from "react";

export const ProtectedRoute = ({ children }: PropsWithChildren) => {

    if (localStorage.getItem("authToken")) {
        return children;
    } else {
        return <Navigate to={"/login"} replace />;
    }
};
