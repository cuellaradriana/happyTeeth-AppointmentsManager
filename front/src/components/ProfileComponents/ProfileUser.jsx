import styles from './ProfileUser.module.css';
import { Link } from 'react-router-dom';

const ProfileUser = ({ user }) => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.subContainer}>
                    <div className={styles.image}></div>
                </div>
                <div className={styles.subContainer}>
                    <h3 className={styles.subtitle}>Bienvenido/a... </h3>
                    <h2 className={styles.title}>Happy Teeth</h2>
                    <h2 className={styles.slogan}>Creamos sonrisas</h2>
                </div>
                <div className={styles.subContainer}>
                    <h4 className={styles.name}>
                        <span className={styles.span}>Nombre: </span>{' '}
                        {user.name}
                    </h4>
                    <p className={styles.text}>
                        <span className={styles.span}>Email: </span>{' '}
                        {user.email}
                    </p>
                    <p className={styles.text}>
                        <span className={styles.span}>DNI: </span>
                        {user.nDni}
                    </p>
                    <p className={styles.text}>
                        <span className={styles.span}>
                            Fecha de nacimiento:{' '}
                        </span>
                        {user.birthdate}
                    </p>
                </div>
            </div>
            <Link className={styles.btn} to="/schedule">
                Agendar turno
            </Link>
        </main>
    );
};

export default ProfileUser;
