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
exports.Truck = void 0;
const typeorm_1 = require("typeorm");
const mechanic_repair_entity_1 = require("./mechanic_repair.entity");
const truck_trip_entity_1 = require("./truck_trip.entity");
let Truck = class Truck {
};
exports.Truck = Truck;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Truck.prototype, "truck_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Truck.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], Truck.prototype, "load", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], Truck.prototype, "capacity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Truck.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Truck.prototype, "number_of_repairs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => mechanic_repair_entity_1.MechanicRepair, (repair) => repair.truck),
    __metadata("design:type", Array)
], Truck.prototype, "repairs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => truck_trip_entity_1.TruckTrip, (trip) => trip.truck),
    __metadata("design:type", Array)
], Truck.prototype, "trips", void 0);
exports.Truck = Truck = __decorate([
    (0, typeorm_1.Entity)()
], Truck);
