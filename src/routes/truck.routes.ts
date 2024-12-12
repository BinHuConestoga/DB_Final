import { Router } from 'express';
import { TruckService } from '../services/truck.service';
import { getRepository } from 'typeorm';
import { Truck } from '../entities/truck.entity';

const router = Router();
const truckService = new TruckService(getRepository(Truck));

router.post('/', async (req, res, next) => {
    try {
        const truck = await truckService.create(req.body);
        res.status(201).send(truck);
    } catch (error) {
        next(error);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const trucks = await truckService.findAll();
        res.status(200).send(trucks);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const truck = await truckService.findOne(Number(req.params.id));
        if (!truck) return res.status(404).send({ error: 'Truck not found' });
        res.status(200).send(truck);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const updatedTruck = await truckService.update(Number(req.params.id), req.body);
        res.status(200).send(updatedTruck);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        await truckService.remove(Number(req.params.id));
        res.status(200).send({ message: 'Truck deleted successfully' });
    } catch (error) {
        next(error);
    }
});

export default router;