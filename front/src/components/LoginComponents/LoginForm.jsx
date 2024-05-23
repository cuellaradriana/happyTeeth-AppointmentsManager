import { useState } from 'react';
import { validateLogin } from '../../helpers/validate';
import { initialFormDataLogin } from '../../helpers/initialFormData';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/reducer.js';
import styles from './LoginForm.module.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import handleOnChange from '../../helpers/handleOnChange.js';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initialFormDataLogin);

    const [errors, setErrors] = useState(initialFormDataLogin);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateLogin(formData);
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            axios
                .post('http://localhost:3000/users/login', formData)
                .then((res) => {
                    const data = res.data.user;
                    Swal.fire({
                        icon: 'success',
                        title: `Bienvenido/a: ${data.name}`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    dispatch(setUser(data));
                    setFormData(initialFormDataLogin);
                    navigate('/myProfile');
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
            <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor="username">
                    Username:
                </label>
                <input
                    className={styles.inputs}
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    placeholder="Nombre de Usuario"
                    onChange={(e) =>
                        handleOnChange(
                            e,
                            setFormData,
                            formData,
                            setErrors,
                            validateLogin
                        )
                    }
                />
                {errors.username && (
                    <span className={styles.error}>{errors.username}</span>
                )}
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor="password">
                    Password:
                </label>
                <input
                    className={styles.inputs}
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    placeholder="***********"
                    onChange={(e) =>
                        handleOnChange(
                            e,
                            setFormData,
                            formData,
                            setErrors,
                            validateLogin
                        )
                    }
                />
                {errors.password && (
                    <span className={styles.error}>{errors.password}</span>
                )}
            </div>

            <button
                className={styles.submit}
                type="submit"
                disabled={Object.keys(errors).length !== 0}
            >
                Iniciar Sesión
            </button>
        </form>
    );
};

export default LoginForm;
