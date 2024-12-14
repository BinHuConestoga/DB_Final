"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const typeorm_1 = require("typeorm");
const mechanic_specialty_entity_1 = require("./mechanic_specialty.entity");
const truck_trip_entity_1 = require("./truck_trip.entity");
let Employee = class Employee {
};
exports.Employee = Employee;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Employee.prototype, "employee_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Employee.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Employee.prototype, "surname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Employee.prototype, "seniority", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Employee.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => mechanic_specialty_entity_1.MechanicSpecialty, (specialty) => specialty.mechanic),
    __metadata("design:type", Array)
], Employee.prototype, "specialties", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => truck_trip_entity_1.TruckTrip, (trip) => trip.driver1),
    __metadata("design:type", Array)
], Employee.prototype, "tripsAsDriver1", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => truck_trip_entity_1.TruckTrip, (trip) => trip.driver2),
    __metadata("design:type", Array)
], Employee.prototype, "tripsAsDriver2", void 0);
exports.Employee = Employee = __decorate([
    (0, typeorm_1.Entity)()
], Employee);
