import { Link } from "react-router-dom";
import styles from "./ListedJob.module.css";

export default function ListedJob(props) {
  return (
    <Link to={`/detail/${props.data.id - 1}`}>
      <div className={`${styles["job-card"]}`}>
        <div
          className={`${styles["company-logo"]}`}
          style={{ background: props.data.logoBackground }}
        >
          <img src={props.data.logo} alt="" />
        </div>
        <p className={`${styles["time"]}`}>
          {props.data.postedAt} <span className={"seperator"}></span>{" "}
          {props.data.contract}
        </p>
        <h2 className={`${styles["job-title"]}`}>{props.data.position}</h2>
        <p className={`${styles["company"]}`}>{props.data.company}</p>

        <p className={`${styles["location"]}`}>{props.data.location}</p>
      </div>
    </Link>
  );
}
