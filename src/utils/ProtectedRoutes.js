import { Navigate, Outlet } from "react-router-dom";
import nookies from "nookies";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const token = nookies.get().authToken;

  return token ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default ProtectedRoute;
