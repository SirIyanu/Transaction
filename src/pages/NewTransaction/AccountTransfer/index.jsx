import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import style from "./style.module.css";

export const AccountTransfer = () => {
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate("/transaction/new-transaction/account-transfer-details");
    }
  };
  return (
    <div className={style.wrapper}>
      <div className={style.wrap}>
        <div className={style.left}>
          <GoArrowLeft />
          <p>Back to transaction mode</p>
        </div>
      </div>

      <div className={style.inner}>
        <div className={style["primary-text"]}>
          <strong>
            <>Account Transfer</>
          </strong>
          <>Sender Details</>
        </div>
        <br />
        <div className={style.label}>
          <label htmlFor="html"> Account Number</label>
          <br />
          <br />
          <input
            type="text"
            placeholder="2533574112"
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
};
