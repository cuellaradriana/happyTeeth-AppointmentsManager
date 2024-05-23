import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <img
                className={styles.image}
                src="https://faceclinic.es/wp-content/uploads/clinica-dental.jpeg"
                alt="Consultorio odontológico"
            />
            <p className={styles.text}>
                Contamos con los mejores profesionales y las últimas tecnologías
                para el tratamiento que necesites
            </p>
            <p className={styles.text}>
                ¡¡¡Registrate, agenda y te esperamos para ayudarte!!!
            </p>
        </div>
    );
};

export default Home;
