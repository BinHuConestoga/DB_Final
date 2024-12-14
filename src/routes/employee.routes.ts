
import { Router } from 'express';
import { EmployeeService } from '../services/employee.service';
import { getRepository } from 'typeorm';
import { Employee } from '../entities/employee.entity';

const router = Router();
const employeeService = new EmployeeService(getRepository(Employee));

router.post('/', async (req, res, next) => {
    try {
        const employee = await employeeService.create(req.body);
        res.status(201).send(employee);
    } catch (error) {
        next(error);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const employees = await employeeService.findAll();
        res.status(200).send(employees);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const employee = await employeeService.findOne(Number(req.params.id));
        if (!employee) return res.status(404).send({ error: 'Employee not found' });
        res.status(200).send(employee);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const updatedEmployee = await employeeService.update(Number(req.params.id), req.body);
        res.status(200).send(updatedEmployee);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        await employeeService.remove(Number(req.params.id));
        res.status(200).send({ message: 'Employee deleted successfully' });
    } catch (error) {
        next(error);
    }
});

export default router;
