import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { setUserAppointments } from '../../redux/reducer';
import AppointmentCard from '../../components/AppointmentComponents/AppointmentCard';
import styles from './MyAppointments.module.css';

const MyAppointments = () => {
    const [filter, setFilter] = useState('all');
    const appointments = useSelector((state) => state.userAppointments);
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        !user.name && navigate('/');
    }, [navigate, user]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios(
                    `http://localhost:3000/users/${user.id}`
                );
                dispatch(setUserAppointments(response.data.appointments));
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data.message,
                });
            }
        };
        user.name && fetchData();
    }, [user, dispatch]);

    const handleFilter = (newFilter) => {
        setFilter(newFilter);
    };

    const filteredAppointments = appointments.filter((appointment) => {
        if (filter === 'active') {
            return appointment.status === 'active';
        } else if (filter === 'cancelled') {
            return appointment.status === 'cancelled';
        } else {
            return true;
        }
    });

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>MIS TURNOS</h2>
            <div>
                <button
                    className={filter === 'all' ? styles.activeBtn : styles.btn}
                    onClick={() => handleFilter('all')}
                >
                    Todos
                </button>
                <button
                    className={
                        filter === 'active' ? styles.activeBtn : styles.btn
                    }
                    onClick={() => handleFilter('active')}
                >
                    Activos
                </button>
                <button
                    className={
                        filter === 'cancelled' ? styles.activeBtn : styles.btn
                    }
                    onClick={() => handleFilter('cancelled')}
                >
                    Cancelados
                </button>
            </div>
            {!filteredAppointments.length ? (
                <p className={styles.text}>No tienes turnos agendados</p>
            ) : (
                filteredAppointments.map((appointment) => {
                    return (
                        <AppointmentCard
                            key={appointment.id}
                            appointment={appointment}
                        />
                    );
                })
            )}
            <Link className={styles.btn} to="/schedule">
                Agendar turno
            </Link>
        </div>
    );
};

export default MyAppointments;
