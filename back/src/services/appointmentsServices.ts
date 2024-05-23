import AppointmentRepository from '../repositories/AppointmentRepository';
import UserRepository from '../repositories/UserRepository';
import AppointmentDto from '../dtos/AppointmentDto';
import { Appointment, AppointmentStatus } from '../entities/Appointment';
import { User } from '../entities/User';

export const getAppointmentsService = async (): Promise<Appointment[]> => {
    const appointments = await AppointmentRepository.find();
    return appointments;
};

export const getAppointmentByIdService = async (
    id: string
): Promise<Appointment> => {
    const appointment = await AppointmentRepository.findOneBy({ id });
    if (appointment) {
        return appointment;
    } else {
        throw new Error(`No se encuentra ningún turno con el ID: ${id}`);
    }
};

export const scheduleAppointmentService = async (
    AppointmentDto: AppointmentDto
): Promise<Appointment> => {
    const { date, time, description, userId } = AppointmentDto;
    const user: User | null = await UserRepository.findOneBy({ id: userId });
    if (!user) {
        throw new Error(`No se encuentra un usuario con ID: ${userId}`);
    }
    const newAppointment = await AppointmentRepository.create({
        date,
        time,
        description,
        user,
    });
    await AppointmentRepository.save(newAppointment);
    return newAppointment;
};

export const cancelAppointmentService = async (
    id: string
): Promise<Appointment> => {
    const appointment: Appointment | null =
        await AppointmentRepository.findOneBy({
            id,
        });
    if (!appointment) {
        throw new Error(`No se encuentran turnos para el ID: ${id}`);
    }
    appointment.status = AppointmentStatus.CANCELLED;
    await AppointmentRepository.save(appointment);
    return appointment;
};
