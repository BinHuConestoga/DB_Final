"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mechanic_specialty_service_1 = require("../services/mechanic_specialty.service");
const typeorm_1 = require("typeorm");
const mechanic_specialty_entity_1 = require("../entities/mechanic_specialty.entity");
const router = (0, express_1.Router)();
const specialtyService = new mechanic_specialty_service_1.MechanicSpecialtyService((0, typeorm_1.getRepository)(mechanic_specialty_entity_1.MechanicSpecialty));
router.post('/', async (req, res, next) => {
    try {
        const specialty = await specialtyService.create(req.body);
        res.status(201).send(specialty);
    }
    catch (error) {
        next(error);
    }
});
router.get('/', async (req, res, next) => {
    try {
        const specialties = await specialtyService.findAll();
        res.status(200).send(specialties);
    }
    catch (error) {
        next(error);
    }
});
router.get('/:id', async (req, res, next) => {
    try {
        const specialty = await specialtyService.findOne(Number(req.params.id));
        if (!specialty)
            return res.status(404).send({ error: 'Specialty not found' });
        res.status(200).send(specialty);
    }
    catch (error) {
        next(error);
    }
});
router.put('/:id', async (req, res, next) => {
    try {
        const updatedSpecialty = await specialtyService.update(Number(req.params.id), req.body);
        res.status(200).send(updatedSpecialty);
    }
    catch (error) {
        next(error);
    }
});
router.delete('/:id', async (req, res, next) => {
    try {
        await specialtyService.remove(Number(req.params.id));
        res.status(200).send({ message: 'Specialty deleted successfully' });
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
