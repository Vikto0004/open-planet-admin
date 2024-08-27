import LoginPage from "@/pages/LoginPage";
import RegistrationPage from "@/pages/RegistrationPage";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("./Layout"));
const HomePage = lazy(() => import("../pages/HomePage"));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
