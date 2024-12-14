import { Router } from 'express';
import { TruckTripService } from '../services/truck_trip.service';
import { getRepository } from 'typeorm';
import { TruckTrip } from '../entities/truck_trip.entity';

const router = Router();
const truckTripService = new TruckTripService(getRepository(TruckTrip));

router.post('/', async (req, res, next) => {
    try {
        const trip = await truckTripService.create(req.body);
        res.status(201).send(trip);
    } catch (error) {
        next(error);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const trips = await truckTripService.findAll();
        res.status(200).send(trips);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const trip = await truckTripService.findOne(Number(req.params.id));
        if (!trip) return res.status(404).send({ error: 'Trip not found' });
        res.status(200).send(trip);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const updatedTrip = await truckTripService.update(Number(req.params.id), req.body);
        res.status(200).send(updatedTrip);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        await truckTripService.remove(Number(req.params.id));
        res.status(200).send({ message: 'Trip deleted successfully' });
    } catch (error) {
        next(error);
    }
});

export default router;