import { Outlet } from "react-router-dom";
import Header from "../components/header";

const Layout: React.FC<any> = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
