import RegisterForm from '../../components/RegisterComponents/RegisterForm';
import styles from './Register.module.css';

const Register = () => {
    return (
        <main className={styles.container}>
            <h2 className={styles.title}>REGISTRATE</h2>
            <RegisterForm />
        </main>
    );
};

export default Register;
