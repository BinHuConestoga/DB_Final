"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_service_1 = require("../services/customer.service");
const typeorm_1 = require("typeorm");
const customer_entity_1 = require("../entities/customer.entity");
const router = (0, express_1.Router)();
const customerService = new customer_service_1.CustomerService((0, typeorm_1.getRepository)(customer_entity_1.Customer));
router.post('/', async (req, res, next) => {
    try {
        const customer = await customerService.create(req.body);
        res.status(201).send(customer);
    }
    catch (error) {
        next(error);
    }
});
router.get('/', async (req, res, next) => {
    try {
        const customers = await customerService.findAll();
        res.status(200).send(customers);
    }
    catch (error) {
        next(error);
    }
});
router.get('/:id', async (req, res, next) => {
    try {
        const customer = await customerService.findOne(Number(req.params.id));
        if (!customer)
            return res.status(404).send({ error: 'Customer not found' });
        res.status(200).send(customer);
    }
    catch (error) {
        next(error);
    }
});
router.put('/:id', async (req, res, next) => {
    try {
        const updatedCustomer = await customerService.update(Number(req.params.id), req.body);
        res.status(200).send(updatedCustomer);
    }
    catch (error) {
        next(error);
    }
});
router.delete('/:id', async (req, res, next) => {
    try {
        await customerService.remove(Number(req.params.id));
        res.status(200).send({ message: 'Customer deleted successfully' });
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
