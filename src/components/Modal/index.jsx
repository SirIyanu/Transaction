import React, { useState } from "react";
import style from "./style.module.css";

export const Modal = ({ children, isOpen, onClose }) => {
  return (
    <div>
      {isOpen && (
        <div className={style.modal}>
          <div onClick={onClose} className={style.overlay}></div>
          <div className={style["modal-content"]}>{children}</div>
        </div>
      )}
    </div>
  );
};
