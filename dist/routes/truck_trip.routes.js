"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const truck_trip_service_1 = require("../services/truck_trip.service");
const typeorm_1 = require("typeorm");
const truck_trip_entity_1 = require("../entities/truck_trip.entity");
const router = (0, express_1.Router)();
const truckTripService = new truck_trip_service_1.TruckTripService((0, typeorm_1.getRepository)(truck_trip_entity_1.TruckTrip));
router.post('/', async (req, res, next) => {
    try {
        const trip = await truckTripService.create(req.body);
        res.status(201).send(trip);
    }
    catch (error) {
        next(error);
    }
});
router.get('/', async (req, res, next) => {
    try {
        const trips = await truckTripService.findAll();
        res.status(200).send(trips);
    }
    catch (error) {
        next(error);
    }
});
router.get('/:id', async (req, res, next) => {
    try {
        const trip = await truckTripService.findOne(Number(req.params.id));
        if (!trip)
            return res.status(404).send({ error: 'Trip not found' });
        res.status(200).send(trip);
    }
    catch (error) {
        next(error);
    }
});
router.put('/:id', async (req, res, next) => {
    try {
        const updatedTrip = await truckTripService.update(Number(req.params.id), req.body);
        res.status(200).send(updatedTrip);
    }
    catch (error) {
        next(error);
    }
});
router.delete('/:id', async (req, res, next) => {
    try {
        await truckTripService.remove(Number(req.params.id));
        res.status(200).send({ message: 'Trip deleted successfully' });
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
