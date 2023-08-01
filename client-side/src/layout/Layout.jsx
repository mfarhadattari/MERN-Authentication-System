import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>Navigation Bar</div>
      <Outlet />
    </div>
  );
};

export default Layout;
