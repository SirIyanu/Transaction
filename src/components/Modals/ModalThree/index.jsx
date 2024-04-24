import style from "./style.module.css";
import Success from "../../../assets/success.svg";
export const ModalThree = () => {
  return (
    <div className={style.container}>
      <img src={Success} alt="" />
      <div>
        <strong>Transaction Has Been Successfully Submitted</strong>
      </div>
      <div>Awaiting supervisor's Approval</div>
      <button>Done</button>
    </div>
  );
};
