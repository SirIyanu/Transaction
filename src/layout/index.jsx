import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import style from "./style.module.css";

export const LayOut = () => {
  return (
    <div>
      <NavBar />
      <div className={style.body}>
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};
