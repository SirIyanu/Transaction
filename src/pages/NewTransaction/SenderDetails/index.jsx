import { Link, useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { GoArrowLeft } from "react-icons/go";
import { ModalOne } from "../../../components/Modals/ModalOne";
import { ModalTwo } from "../../../components/Modals/ModalTwo";
import {ModalThree} from "../../../components/Modals/ModalThree";
import { ModalFour } from "../../../components/Modals/ModalFour"; 
import { useState } from "react";
import { Modal } from "../../../components/Modal";

export const SenderDetails = () => {
  const [modal, setModal] = useState(false);
  const [mandateConfirmed, setMandateConfirmed] = useState(false); // State variable to manage mandate confirmation
  const [showCancelButton, setShowCancelButton] = useState(true); // State variable to manage whether to show the cancel button
  const [bvnVerified, setBvnVerified] = useState(false); // State variable to track BVN verification
  const [submitClicked, setSubmitClicked] = useState(false); // State variable to track if submit button is clicked
  const [showModalFour, setShowModalFour] = useState(false); // State variable to track whether to show Modal Four

  
  const toggleModal = () => {
    setModal(!modal);

    // Close the modal after confirming mandate
    if (!modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  };

  const handleConfirmMandate = () => {
    // Update the state variable to indicate that the mandate is confirmed
    setMandateConfirmed(true);
    toggleModal(); 
  };

  const handleVerifyBVN = () => {
    // Logic to verify BVN
    // Once BVN is verified successfully, update state to indicate BVN verification
    setBvnVerified(true);
     // Remove the "Cancel" and "Verify Mandate" buttons
     setShowCancelButton(false);
     // Reset the mandateConfirmed state
     setMandateConfirmed(false);
     // Close the modal
     toggleModal();
  };

  const handleSubmit = () => {
    setSubmitClicked(true); // Set submitClicked to true when the submit button is clicked
    setShowModalFour(false); // Ensure Modal Four is hidden initially

  };

  const handleDoneModalThree = () => {
    // Set showModalFour to true when the Done button on Modal Three is clicked
    setShowModalFour(true);
  };
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
                  <p className={`${style.active} ${mandateConfirmed ? style.green : ""}`}>{mandateConfirmed ? "Active" : "Active"}</p>
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
          {bvnVerified ? (
            <>
            <button className={style.submit} onClick={handleSubmit}>Submit</button>
            {submitClicked && (
              <Modal isOpen={submitClicked} onClose={() => setSubmitClicked(false)}>
                <ModalThree  onDone={handleDoneModalThree} />
              </Modal>
            )}
          </>

          ) : (
            <>
          <button className={`${style.mandate} ${mandateConfirmed ? style.green : ""}`} onClick={toggleModal}>
          {mandateConfirmed ? "Mandate Confirmed" : "Confirm Mandate"}
          </button>
          {showCancelButton && (
          <button className={style.cancel}>Cancel Transaction</button>)}
          <button onClick={handleVerifyBVN} className={style.proceed}>Verify BVN</button>
          </>
        )}
        </section>
      </div>
      {modal && (
        <Modal isOpen={modal} onClose={toggleModal}>
          {bvnVerified ? <ModalTwo/> : <ModalOne onConfirm={handleConfirmMandate}/>}
        </Modal>
      )}
{showModalFour && (
  <Modal isOpen={showModalFour} onClose={() => setShowModalFour(false)}>
    <ModalFour />
  </Modal>
)}
    </>
  );
}
 