import { useRoutes } from "react-router-dom";

//import Routes
import MainRoutes from "./MainRoutes";
import AuthRoutes from "./AuthRoutes";
import LandingRoutes from "./LandingRoutes";

const RoutesApp = () => {
  return useRoutes([MainRoutes, AuthRoutes, LandingRoutes]);
};

export default RoutesApp;
