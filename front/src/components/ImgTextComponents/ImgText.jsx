import styles from './ImgText.module.css';

const ImgText = ({ service }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img
                    className={styles.image}
                    src={service.image}
                    alt={service.title}
                />
            </div>
            <div className={styles.textContainer}>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
            </div>
        </div>
    );
};

export default ImgText;
