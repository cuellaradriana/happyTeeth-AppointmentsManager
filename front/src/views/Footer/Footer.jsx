import styles from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.socialMedia}>
                    <a
                        href="https://www.facebook.com/happyteethclinic"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://www.instagram.com/happyteethclinic"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/happyteethclinic"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn />
                    </a>
                </div>
                <div className={styles.contactInfo}>
                    <p>
                        <strong>Teléfono:</strong> (011) 2750-1678
                    </p>
                    <p>
                        <strong>Dirección:</strong> Uruguay 964, Ciudad Autónoma
                        de Buenos Aires
                    </p>
                </div>
            </div>
            <div className={styles.copyRight}>
                <p>
                    &copy; 2024 Happy Teeth Clinic. Todos los derechos
                    reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
