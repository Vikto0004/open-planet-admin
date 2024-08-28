import { Navigate } from "react-router-dom";

interface Props {
  component: React.ReactNode;
  redirectTo: string;
}

const RestrictedRoute: React.FC<Props> = ({ component, redirectTo }) => {
  const isLoggedIn = false;

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

export default RestrictedRoute;
