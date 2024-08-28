import LoginPage from "@/pages/auth/LoginPage";
import RegistrationPage from "@/pages/auth/RegistrationPage";
import { lazy, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import PrivateRoute from "./shared/PrivateRoute";
import RestrictedRoute from "./shared/RestrictedRoute";

const Layout = lazy(() => import("./Layout"));
const HomePage = lazy(() => import("../pages/home/HomePage"));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <PrivateRoute redirectTo="/login" component={<HomePage />} />
            }
          >
            <Route index element={"Dashboard"} />
            <Route path="pages" element={<Outlet />}>
              <Route path="home" element={<div>Home Page</div>} />
              <Route path="about" element={<div>About Page</div>} />
              <Route path="support" element={<div>Support Page</div>} />
              <Route
                path="international-transfers"
                element={<div>International Transfers Page</div>}
              />
              <Route
                path="public-offer"
                element={<div>Public Offer Page</div>}
              />
            </Route>
            <Route path="news" element={"News"} />
            <Route path="vacancies" element={"Vacancies"} />
            <Route path="moderators" element={"Moderators"} />
          </Route>
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/" component={<LoginPage />} />
            }
          />
          <Route
            path="registration"
            element={
              <RestrictedRoute
                redirectTo="/"
                component={<RegistrationPage />}
              />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
