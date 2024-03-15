import styles from "./Button.module.css";
export default function Button(props) {
  return (
    <button
      className={`${styles["button"]} ${
        props.dark ? styles["dark"] : styles["light"]
      }  ${props.extend == false ? "" : styles["extend"]}
      
      ${props.short ? styles["short"] : ""}`}
      onClick={props.handler}
    >
      {props.children}
    </button>
  );
}
