import styles from './Logo.module.css';

const Logo = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Happy Teeth</h1>
            <span className={styles.slogan}>Creamos sonrisas</span>
        </div>
    );
};
export default Logo;
