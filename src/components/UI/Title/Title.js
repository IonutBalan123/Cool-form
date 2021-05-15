import styles from './title.module.css';

const Title = ({children}) => {
    return (
      <div>
        <div className={styles.TitleDiv}>
          <h2>{children}</h2>
        </div>
      </div>
    );
}
 
export default Title;