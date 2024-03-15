import { useState } from "react";
import styles from "./Overlay.module.css";
export default function Overlay(props) {
  function overlayHandler() {
    props.setShowOverlay(false);
  }
  return (
    <div
      className={`${styles["overlay"]} ${
        props.showOverlay ? styles["show"] : " "
      } `}
      onClick={overlayHandler}
    >
    </div>
  );
}
