import style from "./style.module.css";
import Success from "../../../assets/success.svg";
export const ModalFour = () => {
  return (
    <div className={style.container}>
      <img src={Success} alt="" />
      <div>
        <strong>Transaction Completed</strong>
      </div>
      <button>Print Receipt</button>
    </div>
  );
};
