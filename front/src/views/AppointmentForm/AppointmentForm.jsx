import { useState } from 'react';
import { optionsSelect } from '../../helpers/FieldsInputs';
import { useSelector } from 'react-redux';
import styles from './AppointmentForm.module.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { initialFormDataAppointment } from '../../helpers/initialFormData';
import handleOnChange from '../../helpers/handleOnChange';
import { validateAppointment } from '../../helpers/validate';
import { useNavigate } from 'react-router-dom';

const AppointmentForm = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const userId = user.id;
    const [formData, setFormData] = useState(initialFormDataAppointment);
    const [errors, setErrors] = useState(initialFormDataAppointment);

    const postData = async () => {
        try {
            const response = await axios.post(
                'http://localhost:3000/appointments/schedule',
                { ...formData, userId }
            );
            Swal.fire({
                icon: 'success',
                title: `Has agendado un turno para
                el: ${response.data.date} 
                a las: ${response.data.time} `,
                showConfirmButton: true,
                timer: 3000,
            });
            setFormData(initialFormDataAppointment);
            navigate('/myAppointments');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.message,
            });
        }
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateAppointment(formData);
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            postData();
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Agendá un nuevo turno</h2>
            <form className={styles.containerForm} onSubmit={handleOnSubmit}>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="date">
                        Fecha:
                    </label>
                    <input
                        className={styles.inputs}
                        type="date"
                        name="date"
                        id="date"
                        value={formData.date}
                        onChange={(e) =>
                            handleOnChange(
                                e,
                                setFormData,
                                formData,
                                setErrors,
                                validateAppointment
                            )
                        }
                    />
                    {errors.date && (
                        <span className={styles.error}>{errors.date}</span>
                    )}
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="time">
                        Hora:
                    </label>
                    <input
                        className={styles.inputs}
                        type="time"
                        name="time"
                        id="time"
                        value={formData.time}
                        onChange={(e) =>
                            handleOnChange(
                                e,
                                setFormData,
                                formData,
                                setErrors,
                                validateAppointment
                            )
                        }
                    />
                    {errors.time && (
                        <span className={styles.error}>{errors.time}</span>
                    )}
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="description">
                        Servicio requerido:
                    </label>
                    <select
                        className={styles.inputs}
                        name="description"
                        id="description"
                        value={formData.description}
                        onChange={(e) =>
                            handleOnChange(
                                e,
                                setFormData,
                                formData,
                                setErrors,
                                validateAppointment
                            )
                        }
                    >
                        {optionsSelect.map((option) => (
                            <option key={option.id} value={option.value}>
                                {option.value}
                            </option>
                        ))}
                    </select>

                    {errors.description && (
                        <span className={styles.error}>
                            {errors.description}
                        </span>
                    )}
                </div>
                <button
                    className={styles.submit}
                    type="submit"
                    disabled={Object.keys(errors).length !== 0}
                >
                    Confirmar
                </button>
            </form>
        </div>
    );
};

export default AppointmentForm;
