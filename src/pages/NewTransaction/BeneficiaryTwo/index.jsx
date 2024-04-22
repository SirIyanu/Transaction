import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
export const BeneficiaryTwo = () => {
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate("/transaction/new-transaction/sender-details");
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
          <>Beneficiary Details</>
        </div>
        <br />
        <div className={style.label}>
          <label htmlFor="html"> Select Bank</label>
          <br />
          <br />
          <input
            type="text"
            placeholder="Sterling Bank"
            onKeyDown={handleKeyDown}
          />
        </div>
        <br />
        <br />
        <div className={style.label}>
          <label htmlFor="html"> Beneficiary Account Number</label>
          <br />
          <br />
          <input
            type="text"
            placeholder="0987654321"
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
};
