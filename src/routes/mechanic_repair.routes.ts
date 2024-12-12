import { Router } from 'express';
import { MechanicRepairService } from '../services/mechanic_repair.service';
import { getRepository } from 'typeorm';
import { MechanicRepair } from '../entities/mechanic_repair.entity';

const router = Router();
const repairService = new MechanicRepairService(getRepository(MechanicRepair));

router.post('/', async (req, res, next) => {
    try {
        const repair = await repairService.create(req.body);
        res.status(201).send(repair);
    } catch (error) {
        next(error);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const repairs = await repairService.findAll();
        res.status(200).send(repairs);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const repair = await repairService.findOne(Number(req.params.id));
        if (!repair) return res.status(404).send({ error: 'Repair not found' });
        res.status(200).send(repair);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const updatedRepair = await repairService.update(Number(req.params.id), req.body);
        res.status(200).send(updatedRepair);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        await repairService.remove(Number(req.params.id));
        res.status(200).send({ message: 'Repair deleted successfully' });
    } catch (error) {
        next(error);
    }
});

export default router;