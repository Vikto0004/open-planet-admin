import { Outlet } from "react-router-dom";
import Container from "./shared/Container";

const Layout = () => {
  return (
    <Container>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
