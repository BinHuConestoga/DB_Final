"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mechanic_repair_service_1 = require("../services/mechanic_repair.service");
const typeorm_1 = require("typeorm");
const mechanic_repair_entity_1 = require("../entities/mechanic_repair.entity");
const router = (0, express_1.Router)();
const repairService = new mechanic_repair_service_1.MechanicRepairService((0, typeorm_1.getRepository)(mechanic_repair_entity_1.MechanicRepair));
router.post('/', async (req, res, next) => {
    try {
        const repair = await repairService.create(req.body);
        res.status(201).send(repair);
    }
    catch (error) {
        next(error);
    }
});
router.get('/', async (req, res, next) => {
    try {
        const repairs = await repairService.findAll();
        res.status(200).send(repairs);
    }
    catch (error) {
        next(error);
    }
});
router.get('/:id', async (req, res, next) => {
    try {
        const repair = await repairService.findOne(Number(req.params.id));
        if (!repair)
            return res.status(404).send({ error: 'Repair not found' });
        res.status(200).send(repair);
    }
    catch (error) {
        next(error);
    }
});
router.put('/:id', async (req, res, next) => {
    try {
        const updatedRepair = await repairService.update(Number(req.params.id), req.body);
        res.status(200).send(updatedRepair);
    }
    catch (error) {
        next(error);
    }
});
router.delete('/:id', async (req, res, next) => {
    try {
        await repairService.remove(Number(req.params.id));
        res.status(200).send({ message: 'Repair deleted successfully' });
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
