import styles from "./Home.module.css";
import ListedJob from "../../components/ListedJob/ListedJob";
import Button from "../../components/Button/Button";
import SearchFilter from "../../components/SeachFilter/SearchFilter";
export default function Home(props) {
  if (props.data) {
    
    return (
      <article className={`${styles["job-search"]}`}>
        <SearchFilter />
        <section className={`${styles["jobs"]}`}>
          {props.data.map((curr) => {
            return <ListedJob data={curr} />;
          })}
        </section>
        <div className={`${styles["load-more"]}`}>
          <Button dark={true}>Load More</Button>
        </div>
      </article>
    );
  }

  return <></>;
}
