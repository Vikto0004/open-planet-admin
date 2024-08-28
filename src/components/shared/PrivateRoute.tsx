import { Navigate } from "react-router-dom";

interface Props {
  component: React.ReactNode;
  redirectTo: string;
}

const PrivateRoute: React.FC<Props> = ({ component, redirectTo }) => {
  const isLoggedIn = false;

  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
