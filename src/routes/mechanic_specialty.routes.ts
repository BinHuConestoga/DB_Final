import { Router } from 'express';
import { MechanicSpecialtyService } from '../services/mechanic_specialty.service';
import { getRepository } from 'typeorm';
import { MechanicSpecialty } from '../entities/mechanic_specialty.entity';

const router = Router();
const specialtyService = new MechanicSpecialtyService(getRepository(MechanicSpecialty));

router.post('/', async (req, res, next) => {
    try {
        const specialty = await specialtyService.create(req.body);
        res.status(201).send(specialty);
    } catch (error) {
        next(error);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const specialties = await specialtyService.findAll();
        res.status(200).send(specialties);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const specialty = await specialtyService.findOne(Number(req.params.id));
        if (!specialty) return res.status(404).send({ error: 'Specialty not found' });
        res.status(200).send(specialty);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const updatedSpecialty = await specialtyService.update(Number(req.params.id), req.body);
        res.status(200).send(updatedSpecialty);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        await specialtyService.remove(Number(req.params.id));
        res.status(200).send({ message: 'Specialty deleted successfully' });
    } catch (error) {
        next(error);
    }
});

export default router;