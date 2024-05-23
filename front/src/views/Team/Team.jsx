import { useState } from 'react';
import specialists from '../../helpers/specialists';
import ImgText from '../../components/ImgTextComponents/ImgText';
import styles from './Team.module.css';

const Team = () => {
    const [mySpecialists, setMySpecialists] = useState(specialists);
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>TEAM - ESPECIALISTAS</h3>
            {mySpecialists.map((specialist) => {
                return (
                    <ImgText
                        key={specialist.id}
                        service={specialist}
                        setMySpecialists={setMySpecialists}
                    />
                );
            })}
        </div>
    );
};

export default Team;
