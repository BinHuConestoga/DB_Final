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
exports.TruckTrip = void 0;
const typeorm_1 = require("typeorm");
const truck_entity_1 = require("./truck.entity");
const employee_entity_1 = require("./employee.entity");
const shipment_entity_1 = require("./shipment.entity");
let TruckTrip = class TruckTrip {
};
exports.TruckTrip = TruckTrip;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TruckTrip.prototype, "trip_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => truck_entity_1.Truck, (truck) => truck.trips),
    (0, typeorm_1.JoinColumn)({ name: 'truck_id' }),
    __metadata("design:type", truck_entity_1.Truck)
], TruckTrip.prototype, "truck", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => employee_entity_1.Employee, (employee) => employee.tripsAsDriver1),
    (0, typeorm_1.JoinColumn)({ name: 'driver1_id' }),
    __metadata("design:type", employee_entity_1.Employee)
], TruckTrip.prototype, "driver1", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => employee_entity_1.Employee, (employee) => employee.tripsAsDriver2, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'driver2_id' }),
    __metadata("design:type", employee_entity_1.Employee)
], TruckTrip.prototype, "driver2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => shipment_entity_1.Shipment, (shipment) => shipment),
    (0, typeorm_1.JoinColumn)({ name: 'shipment_id' }),
    __metadata("design:type", shipment_entity_1.Shipment)
], TruckTrip.prototype, "shipment", void 0);
exports.TruckTrip = TruckTrip = __decorate([
    (0, typeorm_1.Entity)()
], TruckTrip);
