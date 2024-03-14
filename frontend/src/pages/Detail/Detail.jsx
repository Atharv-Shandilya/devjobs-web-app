import { useEffect } from "react";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";

export default function Detail(props) {
  const { id } = useParams();
  const data = props.data[id];

  if (data != undefined) {
    return (
      <article className={`${styles["job-detail"]}`}>
        <section className={`${styles["company-overview"]}`}>
          <div
            style={{ backgroundColor: data.logoBackground }}
            className={`${styles["company-logo"]}`}
          >
            <img src={data.logo} alt="" />
          </div>
          <div className={`${styles["company-desc"]}`}>
            <div>
              <h2>{data.company}</h2>
              <p>{data.website}</p>
            </div>

            <a href={data.website}>
              <Button>Company Site</Button>
            </a>
          </div>
        </section>
        <section className={`${styles["job-desc"]}`}>
          <div className={`${styles["job-overview"]}`}>
            <div>
              <p>
                {data.postedAt} <span className="seperator"></span>
                {data.contract}
              </p>
              <h2 className={`${styles["position"]}`}>{data.position}</h2>
              <p className={`${styles["location"]}`}>{data.location}</p>
            </div>

            <a href={data.apply}>
              <Button dark={true}>Apply Now</Button>
            </a>
          </div>

          <p className={`${styles["description"]}`}>{data.description}</p>
          <h3>Requirements</h3>
          <p>{data.requirements.content}</p>
          <ul>
            {data.requirements.items.map((curr) => {
              return <li>{curr}</li>;
            })}
          </ul>

          <h3>What You Will Do</h3>
          <ol>
            {data.role.items.map((curr) => {
              return <li>{curr}</li>;
            })}
          </ol>
        </section>
      </article>
    );
  }

  return <></>;
}
