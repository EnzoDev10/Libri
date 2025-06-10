import { Navigate } from "react-router-dom";

import { useAuthContext } from "../context/contextIndex";

import type { PropsWithChildren } from "react";

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
    const auth = useAuthContext();

    if (!auth?.user) {
        return <Navigate to={"/login"} replace />;
    }

    return children;
};
