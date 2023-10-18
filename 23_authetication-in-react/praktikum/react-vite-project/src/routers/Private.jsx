import React from "react";
import auth from "../utils/auth";
import { Navigate, Outlet} from "react-router-dom";

export default function PrivateRoute() {
	if (auth.isAuthorized()) {
		return <Outlet />;
	}

	return <Navigate to={'/login'} />;
}