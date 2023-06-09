import { Route, useNavigate, Navigate, Outlet } from "react-router-dom";
import nookies from "nookies";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const token = nookies.get().token;
  const navigate = useNavigate();

  return token ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default ProtectedRoute;
