import styles from "./final.module.css";

const Final = ({ data }) => {
  return (
    <div className={styles.Final}>

      <div className={styles.SectionContainer}>
        <div className={styles.Section}>
          <p>Name</p>
          <span>{data.name}</span>
        </div>
        <div className={styles.Section}>
          <p>Last name</p>
          <span>{data.lastName}</span>
        </div>
        <div className={styles.Section}>
          <p>Country</p>
          <span>{data.country}</span>
        </div>
        <div className={styles.Section}>
          <p>Age</p>
          <span>{data.age}</span>
        </div>
        <div className={styles.Section}>
          <p>Weight</p>
          <span>{data.weight} Kg</span>
        </div>
        <div className={styles.Section}>
          <p>Height</p>
          <span>{data.height} cm</span>
        </div>
        <div className={styles.Section}>
          <p>Kalories/day</p>
          <span>{data.kalories} Kcal</span>
        </div>
        <div className={styles.Section}>
          <p>Exercise/day</p>
          <span>{data.exercise} min</span>
        </div>
        <div className={styles.Section}>
          <p>Username</p>
          <span>{data.username}</span>
        </div>
        <div className={styles.Section}>
          <p>E-mail</p>
          <span className={styles.Email}>{data.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Final;
