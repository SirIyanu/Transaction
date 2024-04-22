import React, { useState } from "react";
import style from "./style.module.css";
import Down from "../../assets/move_down.svg";
import { useNavigate, Outlet } from "react-router-dom";

export const NewTransaction = () => {
  const [proceedClicked, setProceedClicked] = useState(false);
  const navigate = useNavigate();

  const handleProceed = () => {
    setProceedClicked(true);
    navigate("/transaction/new-transaction/account-transfer");
  };
  return (
    <>
      {!proceedClicked && (
        <div className={style.wrapper}>
          <p>How would you like to perform new transaction</p>
          <div className={style.inner}>
            <div className={style.active}>
              <div className={style.circle}></div>
            </div>
            <div className={style.content}>
              <img className={style.down} src={Down} alt="" />
              <p className={style.text}>Account Transfer</p>
            </div>
          </div>
          <button className={style.button} onClick={handleProceed}>
            Proceed
          </button>
        </div>
      )}

      {proceedClicked && <Outlet className={style.outlet} />}
    </>
  );
};
