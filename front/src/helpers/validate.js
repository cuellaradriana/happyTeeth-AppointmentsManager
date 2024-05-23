const regExUsername = /^(?=.*[a-zA-Z]).{6,}$/;
const regExPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const regExName = /^[a-zA-Z\u00C0-\u017F\d\s]{6,}$/;
const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regExDNI = /^\d{7,8}$/;

export const validateLogin = (input) => {
    const errors = {};

    if (!input.username) {
        errors.username = 'El nombre de usuario es requerido';
    } else if (!regExUsername.test(input.username)) {
        errors.username = 'El nombre de usuario no es válido';
    }

    if (!input.password) {
        errors.password = 'La contraseña es requerida';
    } else if (!regExPassword.test(input.password)) {
        errors.password = 'La contraseña ingresada no es válida';
    }

    return errors;
};

export const validateRegister = (input) => {
    const errors = {};

    if (!input.name) {
        errors.name = 'El nombre es requerido';
    } else if (!regExName.test(input.name)) {
        errors.name = 'El nombre solo puede contener caracteres alfabéticos';
    }

    if (!input.email) {
        errors.email = 'El correo electrónico es requerido';
    } else if (!regExEmail.test(input.email)) {
        errors.email = 'El correo electrónico no es válido';
    }

    if (!input.birthdate) {
        errors.birthdate = 'La fecha de nacimiento es requerida';
    } else {
        const birthdate = new Date(input.birthdate).getFullYear();
        const maxBirthdate = new Date().getFullYear();
        const year = maxBirthdate - birthdate;
        if (year > 100) {
            errors.birthdate =
                'La fecha de nacimiento no puede ser hace más de 100 años';
        }
        if (year < 18) {
            errors.birthdate = 'Debes ser mayor de edad para registrarte';
        }
    }

    if (!input.nDni) {
        errors.nDni = 'El número de documento es requerido';
    } else if (!regExDNI.test(input.nDni)) {
        errors.nDni =
            'El número de documento solo puede contener números y tener entre 7 y 8 dígitos';
    }

    if (!input.username) {
        errors.username = 'El nombre de usuario es requerido';
    } else if (!regExUsername.test(input.username)) {
        errors.username =
            'El nombre de usuario debe tener mínimo 6 caracteres alfanuméricos';
    }

    if (!input.password) {
        errors.password = 'La contraseña es requerida';
    } else if (!regExPassword.test(input.password)) {
        errors.password =
            'La contraseña debe tener mínimo 8 caracteres, al menos una mayúscula, una minúscula, un número y un caracter especial';
    }

    return errors;
};

export const validateAppointment = (input) => {
    const errors = {};

    if (!input.date) {
        errors.date = 'La fecha es requerida';
    } else {
        const selectedDate = new Date(input.date);
        const today = new Date();

        if (selectedDate < today || selectedDate == today) {
            errors.date = 'Seleccione una fecha a partir de mañana';
        }

        const dayOfWeek = selectedDate.getDay();
        if (dayOfWeek === 5 || dayOfWeek === 6) {
            errors.date = 'Seleccione un día laborable (de lunes a viernes)';
        }
    }

    if (!input.time) {
        errors.time = 'La hora es requerida';
    } else {
        const selectedTime = input.time.split(':').map(Number);
        const selectedHour = selectedTime[0];
        const selectedMinute = selectedTime[1];

        if (
            selectedHour < 9 ||
            selectedHour > 18 ||
            (selectedHour === 18 && selectedMinute > 0)
        ) {
            errors.time =
                'Seleccione una hora entre las 9:00 y las 18:00 horas';
        } else if (selectedMinute != 0 && selectedMinute != 30) {
            errors.time =
                'Los turnos son cada media hora, por favor elija una hora puntual o una hora y treinta minutos.';
        }
    }

    if (!input.description) {
        errors.description = 'La descripción es requerida';
    }

    return errors;
};
