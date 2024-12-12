"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shipment_service_1 = require("../services/shipment.service");
const typeorm_1 = require("typeorm");
const shipment_entity_1 = require("../entities/shipment.entity");
const router = (0, express_1.Router)();
const shipmentService = new shipment_service_1.ShipmentService((0, typeorm_1.getRepository)(shipment_entity_1.Shipment));
router.post('/', async (req, res, next) => {
    try {
        const shipment = await shipmentService.create(req.body);
        res.status(201).send(shipment);
    }
    catch (error) {
        next(error);
    }
});
router.get('/', async (req, res, next) => {
    try {
        const shipments = await shipmentService.findAll();
        res.status(200).send(shipments);
    }
    catch (error) {
        next(error);
    }
});
router.get('/:id', async (req, res, next) => {
    try {
        const shipment = await shipmentService.findOne(Number(req.params.id));
        if (!shipment)
            return res.status(404).send({ error: 'Shipment not found' });
        res.status(200).send(shipment);
    }
    catch (error) {
        next(error);
    }
});
router.put('/:id', async (req, res, next) => {
    try {
        const updatedShipment = await shipmentService.update(Number(req.params.id), req.body);
        res.status(200).send(updatedShipment);
    }
    catch (error) {
        next(error);
    }
});
router.delete('/:id', async (req, res, next) => {
    try {
        await shipmentService.remove(Number(req.params.id));
        res.status(200).send({ message: 'Shipment deleted successfully' });
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
