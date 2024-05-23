import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const NavBar = () => {
    const user = useSelector((state) => state.user);

    return (
        <nav className={styles.navContainer}>
            <ul className={styles.container}>
                <li className={styles.navItemContainer}>
                    <Link to="/" className={styles.navItem}>
                        INICIO
                    </Link>
                </li>
                <li className={styles.navItemContainer}>
                    <Link to="/services" className={styles.navItem}>
                        SERVICIOS
                    </Link>
                </li>
                <li className={styles.navItemContainer}>
                    <Link to="/team" className={styles.navItem}>
                        TEAM
                    </Link>
                </li>
                {user.name && (
                    <li className={styles.navItemContainer}>
                        <Link
                            key={2}
                            to="/myAppointments"
                            className={styles.navItem}
                        >
                            MIS TURNOS
                        </Link>
                    </li>
                )}
                {user.name && (
                    <li className={styles.navItemContainer}>
                        <Link
                            key={1}
                            to="/myProfile"
                            className={styles.navItem}
                        >
                            PERFIL
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};
export default NavBar;
