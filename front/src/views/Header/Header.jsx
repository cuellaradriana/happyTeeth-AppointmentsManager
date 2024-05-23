import LoginButton from '../../components/HeaderComponents/LoginButton';
import Logo from '../../components/HeaderComponents/Logo';
import NavBar from '../../components/HeaderComponents/NavBar';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.container}>
            <Logo />
            <NavBar />
            <LoginButton />
        </header>
    );
};
export default Header;
