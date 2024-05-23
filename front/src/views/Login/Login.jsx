import LoginForm from '../../components/LoginComponents/LoginForm';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <main className={styles.container}>
            <h2 className={styles.title}>INGRESAR</h2>
            <LoginForm />
            <span className={styles.text}>¿No tienes una cuenta?</span>
            <Link className={styles.btn} to="/register">
                Registrarme
            </Link>
        </main>
    );
};

export default Login;
