import { Request, Response } from 'express';
import {
    cancelAppointmentService,
    getAppointmentByIdService,
    getAppointmentsService,
    scheduleAppointmentService,
} from '../services/appointmentsServices';
import AppointmentDto from '../dtos/AppointmentDto';

export const getAppointments = async (req: Request, res: Response) => {
    try {
        const appointments = await getAppointmentsService();
        res.status(200).json(appointments);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const getAppointmentById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const appointment = await getAppointmentByIdService(id);
        res.status(200).json(appointment);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const scheduleAppointment = async (req: Request, res: Response) => {
    try {
        const appointmentData: AppointmentDto = req.body;
        const newAppointment = await scheduleAppointmentService(
            appointmentData
        );
        const { user, ...appointmentWithoutUser } = newAppointment;
        res.status(201).json(appointmentWithoutUser);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const appointment = await cancelAppointmentService(id);
        res.status(200).json(appointment);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};
