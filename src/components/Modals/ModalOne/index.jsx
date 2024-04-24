import React, { useState } from "react";
import style from "./style.module.css";
import Pic1 from "../../../assets/pic-1.svg";
import Pic2 from "../../../assets/pic-2.svg";
import Pic3 from "../../../assets/pic-3.svg";
import Pic4 from "../../../assets/pic-4.svg";
import Pic5 from "../../../assets/pic-5.svg";
import Pic6 from "../../../assets/pic-6.svg";
import Pic7 from "../../../assets/pic-7.svg";
import Pic8 from "../../../assets/pic-8.svg";
import Pic9 from "../../../assets/pic-9.svg";
import Pic10 from "../../../assets/pic-10.svg";
export const ModalOne = () => {
  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.flex}>
          <div className={style.end}>
            <div className={style.x}>x</div>
          </div>
          <div className={style.center}>
            <h2 className={style.title}>Mandate API Modal</h2>
          </div>
        </div>

        <div className={style.inner}>
          <div>
            <label htmlFor="">
              <strong>Account Info</strong>
            </label>
            <br />
            <br />
            <div className={style.content}>Either to sign</div>
          </div>
          <div>
            <label htmlFor="Pictures">
              <strong>Pictures</strong>
            </label>
            <br />
            <br />
            <div className={style.gallery}>
              <img src={Pic1} alt="" />
              <img src={Pic2} alt="" />
              <img src={Pic3} alt="" />
              <img src={Pic4} alt="" />
              <img src={Pic5} alt="" />
            </div>
          </div>
          <div>
            <label htmlFor="">
              <strong>Signature</strong>
            </label>
            <br />
            <br />

            <div className={style.gallery}>
              <img src={Pic6} alt="" />
              <img src={Pic7} alt="" />
              <img src={Pic8} alt="" />
              <img src={Pic9} alt="" />
              <img src={Pic10} alt="" />
            </div>
            <div>
              <br />
              <br />
              <label htmlFor="">
                <strong>Account Mandate</strong>
              </label>
              <br />
              <br />
              <div className={style.content}>Either to sign</div>
            </div>
          </div>

          <div className={style.buttons}>
            <button className={style.mandate}>Confirm Mandate</button>
            <button className={style.nomandate}>No Mandate</button>
          </div>
        </div>
      </div>
    </div>
  );
};
