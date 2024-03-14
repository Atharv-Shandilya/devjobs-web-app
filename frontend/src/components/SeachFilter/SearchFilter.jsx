import { useState } from "react";
import Button from "../Button/Button";
import styles from "./SeachFilter.module.css";
export default function SearchFilter() {
  const [checked, setChecked] = useState(false);
  function checkHandler() {
    setChecked((prev) => !prev);
  }
  return (
    <>
      <section className={`${styles["search-filter-desktop"]}`}>
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
          <label htmlFor="isFullTime">Full Time Only</label>
          <Button dark={true}>Search</Button>
        </div>
      </section>

      <section className={`${styles["search-filter-mobile"]}`}>
        
      </section>
    </>
  );
}
