import { Router } from 'express';
import {
    getAppointments,
    getAppointmentById,
    scheduleAppointment,
    cancelAppointment,
} from '../controllers/appointmentsController';
import { validateId } from '../middlewares/appointmentsMiddlewares';

const appointmentsRouter: Router = Router();

appointmentsRouter.get('/', getAppointments);
appointmentsRouter.get('/:id', getAppointmentById);
appointmentsRouter.post('/schedule', validateId, scheduleAppointment);
appointmentsRouter.put('/cancel/:id', cancelAppointment);

export default appointmentsRouter;
