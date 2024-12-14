import { Router } from 'express';
import { CustomerService } from '../services/customer.service';
import { getRepository } from 'typeorm';
import { Customer } from '../entities/customer.entity';

const router = Router();
const customerService = new CustomerService(getRepository(Customer));

router.post('/', async (req, res, next) => {
    try {
        const customer = await customerService.create(req.body);
        res.status(201).send(customer);
    } catch (error) {
        next(error);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const customers = await customerService.findAll();
        res.status(200).send(customers);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const customer = await customerService.findOne(Number(req.params.id));
        if (!customer) return res.status(404).send({ error: 'Customer not found' });
        res.status(200).send(customer);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const updatedCustomer = await customerService.update(Number(req.params.id), req.body);
        res.status(200).send(updatedCustomer);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        await customerService.remove(Number(req.params.id));
        res.status(200).send({ message: 'Customer deleted successfully' });
    } catch (error) {
        next(error);
    }
});

export default router;