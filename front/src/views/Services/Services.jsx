import { useState } from 'react';
import services from '../../helpers/services';
import ImgText from '../../components/ImgTextComponents/ImgText';
import styles from './Services.module.css';

const Services = () => {
    const [myServices, setMyServices] = useState(services);

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>NUESTROS SERVICIOS</h3>
            {myServices.map((service) => {
                return (
                    <ImgText
                        key={service.id}
                        service={service}
                        setMyServices={setMyServices}
                    />
                );
            })}
        </div>
    );
};

export default Services;
