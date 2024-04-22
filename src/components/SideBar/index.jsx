import style from "./style.module.css";
import { CiGrid42 } from "react-icons/ci";
import { CgKeyhole } from "react-icons/cg";
import { TiCreditCard } from "react-icons/ti";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useState } from "react";

export const SideBar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={style.wrapper}>
      <div className={style.inner}>
        <Link to={"/dashboard"}>
          <div className={style.flex}>
            <div>
              <CiGrid42 size={26} />
            </div>
            <p>Dashboard</p>
          </div>
        </Link>

        <div>
          <div
            className={style.flex}
            onClick={() => setActive(!active)}
            style={{ cursor: "pointer" }}
          >
            <div>
              <TiCreditCard size={26} />
            </div>
            <p>Transaction</p>
          </div>

          <div className={active ? style.show : style.hide}>
            <div className={style.wrap}>
              <Link to={"/transaction/new-transaction"}>New Transaction</Link>
              <Link to={"/transaction/transaction-history"}>
                Transaction History
              </Link>
            </div>
          </div>
        </div>

        <div className={style.flex}>
          <div>
            <CgKeyhole size={26} />
          </div>
          <p>Vault</p>
        </div>
      </div>
      <div>
        <div className={style.flex}>
          <LuLogOut className={style.icon} />
          <p className={style.text}>Log Out</p>
        </div>
      </div>
    </div>
  );
};
