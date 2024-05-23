import { useDispatch, useSelector } from 'react-redux';
import styles from './LoginButton.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { removeUser } from '../../redux/reducer';

const LoginButton = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleOnClick = () => {
        dispatch(removeUser({}));
        navigate('/');
    };

    return (
        <div className={styles.container}>
            {!user.name ? (
                <Link className={styles.btnLogin} to="/login">
                    Ingresar
                </Link>
            ) : (
                <button className={styles.btnLogin} onClick={handleOnClick}>
                    Cerrar Sesión
                </button>
            )}
        </div>
    );
};
export default LoginButton;
