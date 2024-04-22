import style from "./style.module.css";
import Logo from "../../assets/logo.svg";
import { FiBell } from "react-icons/fi";

export const NavBar = () => {
  return (
    <>
      <div className={style["nav-bar"]}>
        <div className={style.logo}>
          <img src={Logo} alt="" />
        </div>
        <div className={style.wrapper}>
          <div className={style.innerdiv}>
            <FiBell className={style.icon} />

            <div className={style.text}>
              <div className={style.circle}>BD</div>
              <p className={style.name}>Boluwatife David</p>
            </div>
          </div>

          <p>SA | Branch code</p>
        </div>
      </div>
    </>
  );
};
