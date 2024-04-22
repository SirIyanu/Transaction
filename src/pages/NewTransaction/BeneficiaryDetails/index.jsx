import style from "./style.module.css";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
export const BeneficiaryDetails = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate("/transaction/new-transaction/beneficiary-two");
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
          <>Beneficiary Details</>
        </div>
        <br />
        <div className={style.details}>
          <div>
            <label htmlFor="html"> Select Bank</label>
            <br />
            <br />
            <input type="text" placeholder="Sterling Bank" />
          </div>
          <div>
            <label htmlFor="html"> Beneficaiary Account Number</label>
            <br />
            <br />
            <input type="text" placeholder="0987654321" />
          </div>
          <div className={style.flex}>
            <p>Beneficiary Nane</p>
            <strong>
              <p className={style.color}>MERCY JONES</p>
            </strong>
          </div>
          <div>
            <label htmlFor="html"> Narrartion</label>
            <br />
            <br />
            <textarea
              rows="2"
              cols="50"
              type="text"
              placeholder="This is your school fees and upkeep for the month"
            />
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
