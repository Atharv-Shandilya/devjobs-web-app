import { useContext } from "react";
import styles from "./ThemeSwitch.module.css";
import { themeContex } from "../../context/ThemeContext";

export default function ThemeSwitch() {
  const { theme, setTheme } = useContext(themeContex);

  function changeTheme() {
    setTheme((prev) => !prev);
    document.body.classList.toggle("dark-theme")
  }
  return (
    <div className={`${styles["theme-switch"]} `} onClick={changeTheme}>
      <img src="/assets/desktop/icon-sun.svg" alt="" />
      <div
        className={`${styles["switch"]} ${theme ? styles["clicked"] : ""}`}
      ></div>
      <img src="/assets/desktop/icon-moon.svg" alt="" />
    </div>
  );
}
