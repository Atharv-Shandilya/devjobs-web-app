import styles from "./Home.module.css";
import ListedJob from "../../components/ListedJob/ListedJob";
import Button from "../../components/Button/Button";
import SearchFilter from "../../components/SeachFilter/SearchFilter";
import { useState } from "react";
import Overlay from "../../components/Overlay/Overlay";
export default function Home(props) {
  if (props.data) {
    const [show, setShow] = useState(false);
    function showHandler() {
      setShow((prev) => !prev);
    }

    const showData = show ? props.data : props.data.slice(0, 12);
    return (
      <article className={`${styles["job-search"]}`}>
        <SearchFilter />
        <section className={`${styles["jobs"]}`}>
          {showData.map((curr) => {
            return <ListedJob data={curr} />;
          })}
        </section>
        <div className={`${styles["load-more"]}`}>
          <Button dark={true} handler={showHandler}>
            {show ? "Load Less" : "Load More"}
          </Button>
        </div>
      </article>
    );
  }

  return <></>;
}
