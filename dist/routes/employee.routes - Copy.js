"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_service_1 = require("../services/employee.service");
const typeorm_1 = require("typeorm");
const employee_entity_1 = require("../entities/employee.entity");
const router = (0, express_1.Router)();
const employeeService = new employee_service_1.EmployeeService((0, typeorm_1.getRepository)(employee_entity_1.Employee, 'customConnection'));
router.post('/', async (req, res, next) => {
    try {
        const employee = await employeeService.create(req.body);
        res.status(201).send(employee);
    }
    catch (error) {
        next(error);
    }
});
router.get('/', async (req, res, next) => {
    try {
        const employees = await employeeService.findAll();
        res.status(200).send(employees);
    }
    catch (error) {
        next(error);
    }
});
router.get('/:id', async (req, res, next) => {
    try {
        const employee = await employeeService.findOne(Number(req.params.id));
        if (!employee)
            return res.status(404).send({ error: 'Employee not found' });
        res.status(200).send(employee);
    }
    catch (error) {
        next(error);
    }
});
router.put('/:id', async (req, res, next) => {
    try {
        const updatedEmployee = await employeeService.update(Number(req.params.id), req.body);
        res.status(200).send(updatedEmployee);
    }
    catch (error) {
        next(error);
    }
});
router.delete('/:id', async (req, res, next) => {
    try {
        await employeeService.remove(Number(req.params.id));
        res.status(200).send({ message: 'Employee deleted successfully' });
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
