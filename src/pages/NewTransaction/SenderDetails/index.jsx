import { Link } from "react-router-dom";
import style from "./style.module.css";
import { GoArrowLeft } from "react-icons/go";
import { ModalOne } from "../../../components/Modals/ModalOne";
import { useState } from "react";
import { Modal } from "../../../components/Modal";

export const SenderDetails = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.wrap}>
          <div className={style.left}>
            <GoArrowLeft />
            <p>Back to transaction mode</p>
          </div>
        </div>
        <section className={style["section-one"]}>
          <div>
            <label htmlFor="">Sender Details</label>
          </div>
          <br />
          <div className={style.container}>
            <div className={style.up}>
              <div className={style.flex}>
                <p>Account Nane</p>
                <strong>
                  <p style={{ color: "#304daf" }}>Mary Jane</p>
                </strong>
              </div>
              <div className={style.flex}>
                <p>Account Number</p>
                <strong>
                  <p>2567890987654567IO</p>
                </strong>
              </div>
              <div className={style.flex}>
                <p>Account Status</p>
                <strong>
                  <p>Active</p>
                </strong>
              </div>
              <div className={style.flex}>
                <p>Restriction</p>
                <strong>
                  <p>Not restricted</p>
                </strong>
              </div>
            </div>
            <div className={style.border}></div>
            <div className={style.down}>
              <div className={style.flex}>
                <p>Account Type</p>
                <strong>
                  <p>Savings</p>
                </strong>
              </div>
              <div className={style.flex}>
                <p>Customer Balance</p>
                <strong>
                  <p>N500,000</p>
                </strong>
              </div>
            </div>
          </div>
        </section>
        <section className={style["section-two"]}>
          <div>
            <label htmlFor="">Transfer Information</label>
          </div>
          <br />
          <div className={style.container}>
            <div className={style.up}>
              <div className={style.flex}>
                <p>Currency</p>
                <strong>
                  <p>NGN</p>
                </strong>
              </div>
              <div className={style.flex}>
                <p>Amount</p>
                <strong>
                  <p style={{ color: "#304daf" }}>N100,000</p>
                </strong>
              </div>
              <div className={style.flex}>
                <p>Transaction Type</p>
                <strong>
                  <p>Transfer</p>
                </strong>
              </div>
            </div>
            <div className={style.border}></div>
            <div className={style.down}>
              <div className={style.flex}>
                <p>Narration</p>
                <strong>
                  <p>Cash Deposit by (Depositor's Name or Self)</p>
                </strong>
              </div>
            </div>
          </div>
        </section>
        <section className={style["section-three"]}>
          <div>
            <label htmlFor="">Beneficiary details</label>
          </div>
          <br />
          <div className={style.container}>
            <div className={style.up}>
              <div className={style.flex}>
                <p>Bank Name</p>
                <strong>
                  <p>sterling Bank</p>
                </strong>
              </div>
              <div className={style.flex}>
                <p>Account Number</p>
                <strong>
                  <p style={{ color: "#304daf" }}>Mary Jane</p>
                </strong>
              </div>
              <div className={style.flex}>
                <p>Account Number</p>
                <strong>
                  <p>9876543210</p>
                </strong>
              </div>
            </div>
          </div>
        </section>
        <section className={style["section-four"]}>
          <button className={style.mandate} onClick={toggleModal}>
            Verify Mandate
          </button>
          <button className={style.cancel}>Cancel Transaction</button>
          <button className={style.proceed}>Verify BVN</button>
        </section>
      </div>
      {modal && (
        <Modal isOpen={modal} onClose={toggleModal}>
          <ModalOne />
        </Modal>
      )}
    </>
  );
};
