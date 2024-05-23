import { useState } from 'react';
import { validateRegister } from '../../helpers/validate';
import { initialFormDataRegister } from '../../helpers/initialFormData';
import { fieldsRegister } from '../../helpers/FieldsInputs';
import styles from './RegisterForm.module.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import handleOnChange from '../../helpers/handleOnChange.js';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [formData, setFormData] = useState(initialFormDataRegister);
    const [errors, setErrors] = useState(initialFormDataRegister);
    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateRegister(formData);
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            axios
                .post('http://localhost:3000/users/register', formData)
                .then((res) => {
                    const data = res.data;
                    Swal.fire({
                        icon: 'success',
                        title: `Gracias por Registrarte: ${data.name}`,
                        showConfirmButton: true,
                        timer: 3000,
                    });
                    setFormData(initialFormDataRegister);
                    navigate('/login');
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: error.response.data.message,
                    });
                });
        }
    };

    return (
        <form className={styles.container} onSubmit={(e) => handleOnSubmit(e)}>
            <p className={styles.text}>
                Llená todos los campos y prontó podrás agendar turnos en nuestra
                clínical dental
            </p>
            {fieldsRegister.map((field) => (
                <div className={styles.inputContainer} key={field.name}>
                    <label className={styles.label} htmlFor={field.name}>
                        {field.label}:
                    </label>
                    <input
                        className={styles.inputs}
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        value={formData[field.name]}
                        onChange={(e) =>
                            handleOnChange(
                                e,
                                setFormData,
                                formData,
                                setErrors,
                                validateRegister
                            )
                        }
                    />
                    {errors[field.name] && (
                        <span className={styles.error}>
                            {errors[field.name]}
                        </span>
                    )}
                </div>
            ))}

            <button
                className={styles.submit}
                type="submit"
                disabled={Object.keys(errors).length !== 0}
            >
                Enviar
            </button>
        </form>
    );
};

export default RegisterForm;
