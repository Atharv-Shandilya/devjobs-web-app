import { useState } from "react";
import Button from "../Button/Button";
import styles from "./SeachFilter.module.css";
import Overlay from "../Overlay/Overlay";
export default function SearchFilter() {
  const [checked, setChecked] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  function overlayHandler() {
    setShowOverlay((prev) => !prev);
  }
  function checkHandler() {
    setChecked((prev) => !prev);
  }
  return (
    <>
      <Overlay
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
      ></Overlay>
      {showOverlay && (
        <section className={`${styles["search-filter"]} ${styles["overlay"]}`}>
          <div>
            <img src="/assets/desktop/icon-location.svg" alt="" />
            <input type="text" placeholder="Filter by location…" />
          </div>
          <div
            className={`${styles["last-filter"]} ${
              checked ? styles["checked"] : ""
            } ${styles["mobile"]}`}
          >
            <input type="checkbox" id="isFullTime" onClick={checkHandler} />
            <label htmlFor="isFullTime">Full Time Only</label>
            <Button dark={true}>Search</Button>
          </div>
        </section>
      )}
      <section className={`${styles["search-filter"]} ${styles["desktop"]}`}>
        <div>
          <img src="/assets/desktop/icon-search.svg" alt="" />
          <input
            type="text"
            placeholder="Filter by title, companies, expertise…"
          />
        </div>
        <div>
          <img src="/assets/desktop/icon-location.svg" alt="" />
          <input type="text" placeholder="Filter by location…" />
        </div>
        <div
          className={`${styles["last-filter"]} ${
            checked ? styles["checked"] : ""
          }`}
        >
          <input type="checkbox" id="isFullTime" onClick={checkHandler} />
          <label htmlFor="isFullTime">
            Full Time <span className={`${styles["remove"]}`}>Only</span>
          </label>
          <Button dark={true}>Search</Button>
        </div>
      </section>

      <section className={`${styles["search-filter"]} ${styles["mobile"]}`}>
        <input type="text" placeholder="Filter by title…" />

        <img
          src="/assets/mobile/icon-filter.svg"
          alt="filter icon"
          onClick={overlayHandler}
        />

        <Button dark={true} extend={false} short={true}>
          <img
            src="/assets/desktop/icon-search.svg"
            alt="search icon"
            className={`${styles["search-svg"]}`}
          />
        </Button>
      </section>
    </>
  );
}
