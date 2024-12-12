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
exports.MechanicRepair = void 0;
const typeorm_1 = require("typeorm");
const truck_entity_1 = require("./truck.entity");
let MechanicRepair = class MechanicRepair {
};
exports.MechanicRepair = MechanicRepair;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MechanicRepair.prototype, "repair_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => truck_entity_1.Truck, (truck) => truck.repairs),
    (0, typeorm_1.JoinColumn)({ name: 'truck_id' }),
    __metadata("design:type", truck_entity_1.Truck)
], MechanicRepair.prototype, "truck", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MechanicRepair.prototype, "estimated_repair_days", void 0);
exports.MechanicRepair = MechanicRepair = __decorate([
    (0, typeorm_1.Entity)()
], MechanicRepair);
