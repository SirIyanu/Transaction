import style from "./style.module.css";
import Success from "../../../assets/success.svg";
export const ModalTwo = () => {
  return (
    <div className={style.container}>
      <img src={Success} alt="" />
      <div>Customer's BVN is Valid</div>
      <button>View Preview Page</button>
    </div>
  );
};
