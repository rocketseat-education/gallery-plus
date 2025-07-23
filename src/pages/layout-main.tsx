import { Outlet } from "react-router";
import MainHeader from "../components/main-header";

export default function LayoutMain() {
  return (
    <>
      <MainHeader className="mt-9" />
      <Outlet />
    </>
  );
}
