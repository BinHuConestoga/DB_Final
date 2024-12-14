import { Router } from 'express';
import { ShipmentService } from '../services/shipment.service';
import { getRepository } from 'typeorm';
import { Shipment } from '../entities/shipment.entity';

const router = Router();
const shipmentService = new ShipmentService(getRepository(Shipment));

router.post('/', async (req, res, next) => {
    try {
        const shipment = await shipmentService.create(req.body);
        res.status(201).send(shipment);
    } catch (error) {
        next(error);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const shipments = await shipmentService.findAll();
        res.status(200).send(shipments);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const shipment = await shipmentService.findOne(Number(req.params.id));
        if (!shipment) return res.status(404).send({ error: 'Shipment not found' });
        res.status(200).send(shipment);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const updatedShipment = await shipmentService.update(Number(req.params.id), req.body);
        res.status(200).send(updatedShipment);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        await shipmentService.remove(Number(req.params.id));
        res.status(200).send({ message: 'Shipment deleted successfully' });
    } catch (error) {
        next(error);
    }
});

export default router;