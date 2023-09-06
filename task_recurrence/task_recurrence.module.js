"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRecurrenceModule = void 0;
const common_1 = require("@nestjs/common");
const task_recurrence_service_1 = require("./task_recurrence.service");
const task_recurrence_controller_1 = require("./task_recurrence.controller");
const typeorm_1 = require("@nestjs/typeorm");
const task_recurrence_entity_1 = require("./entities/task_recurrence.entity");
let TaskRecurrenceModule = class TaskRecurrenceModule {
};
TaskRecurrenceModule = __decorate([
    (0, common_1.Module)({
        controllers: [task_recurrence_controller_1.TaskRecurrenceController],
        providers: [task_recurrence_service_1.TaskRecurrenceService],
        imports: [typeorm_1.TypeOrmModule.forFeature([task_recurrence_entity_1.TaskRecurrenceEntity])],
    })
], TaskRecurrenceModule);
exports.TaskRecurrenceModule = TaskRecurrenceModule;
//# sourceMappingURL=task_recurrence.module.js.map