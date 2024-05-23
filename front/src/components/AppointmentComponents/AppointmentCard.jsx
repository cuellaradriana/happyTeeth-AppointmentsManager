import axios from 'axios';
import Swal from 'sweetalert2';
import styles from './AppointmentCard.module.css';
import { useDispatch } from 'react-redux';
import { cancelAppointment } from '../../redux/reducer';

const AppointmentCard = ({ appointment }) => {
    const { id, date, time, description, status } = appointment;
    const dispatch = useDispatch();

    const cancelUserAppointment = async (id) => {
        try {
            if (new Date() > new Date(date)) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No puedes cancelar un turno de hoy',
                });
            } else {
                const result = await Swal.fire({
                    title: '¿Estás seguro?',
                    text: 'No podrás revertir la cancelación',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#614BC3',
                    cancelButtonColor: '#FF004D',
                    confirmButtonText: 'Sí, estoy seguro',
                    cancelButtonText: 'Salir',
                });

                if (result.isConfirmed) {
                    await axios.put(
                        `http://localhost:3000/appointments/cancel/${id}`
                    );
                    dispatch(cancelAppointment(id));
                    return Swal.fire({
                        title: 'Cancelado',
                        text: 'Tu turno ha sido cancelado con éxito',
                        icon: 'success',
                    });
                } else {
                    return;
                }
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.message,
            });
        }
    };

    const handleOnCancel = () => {
        cancelUserAppointment(id);
    };
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{description}</h3>
            <p className={styles.date}>{date}</p>
            <p className={styles.time}>{time}</p>
            <p className={styles[status]}>
                {status === 'active' ? 'Activo' : 'Cancelado'}
            </p>
            <button
                className={styles.btn}
                disabled={status === 'cancelled'}
                onClick={handleOnCancel}
            >
                Cancelar Turno
            </button>
        </div>
    );
};

export default AppointmentCard;
