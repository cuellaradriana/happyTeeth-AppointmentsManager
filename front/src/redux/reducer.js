import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    userAppointments: [],
};

export const userSlice = createSlice({
    name: 'userData',
    initialState: initialState,
    reducers: {
        //logica que actualiza el estado
        setUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: (state, action) => {
            state.user = action.payload;
        },
        setUserAppointments: (state, action) => {
            state.userAppointments = action.payload;
        },
        cancelAppointment: (state, action) => {
            state.userAppointments = state.userAppointments.map(
                (appointment) => {
                    if (appointment.id === action.payload) {
                        return { ...appointment, status: 'cancelled' };
                    }
                    return appointment;
                }
            );
        },
    },
});

export const { setUser, removeUser, setUserAppointments, cancelAppointment } =
    userSlice.actions;
