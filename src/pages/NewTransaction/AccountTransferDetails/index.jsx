import style from "./style.module.css";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
export const AccountTransferDetails = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate("/transaction/new-transaction/beneficiary-details");
  };
  return (
    <div className={style.wrapper}>
      <div className={style.wrap}>
        <div className={style.left}>
          <GoArrowLeft />
          <p>Back to transaction mode</p>
        </div>
      </div>
      <br />
      <div className={style.inner}>
        <div className={style["primary-text"]}>
          <strong>
            <>Account Transfer</>
          </strong>
          <>Sender Details</>
        </div>
        <br />
        <div className={style.details}>
          <div className={style.flex}>
            <strong>
              <p>Account Number </p>
            </strong>
            <p>2522574112</p>
          </div>
          <div className={style.flex}>
            <strong>
              <p>Account Name </p>
            </strong>
            <p className={style.blue}>Mary Jane</p>
          </div>
          <div className={style.flex}>
            <strong>
              <p>Account Balance </p>
            </strong>
            <p>500,000.00</p>
          </div>
          <div className={style.flex}>
            <strong>
              <p>Currency </p>
            </strong>
            <p>NGN</p>
          </div>
          <div className={style.flex}>
            <strong>
              <p>Account Status </p>
            </strong>
            <p>Active</p>
          </div>
          <div>
            <label htmlFor="html"> Input Amount to Transfer</label>
            <br />
            <br />
            <input type="text" placeholder="100,000" />
          </div>
          <div className={style.buttons}>
            <button className={style.proceed} onClick={handleProceed}>
              Proceed
            </button>
            <button className={style.cancel}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};
