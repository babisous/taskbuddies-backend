"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const tag_module_1 = require("./tag/tag.module");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const task_module_1 = require("./task/task.module");
const task_recurrence_module_1 = require("./task_recurrence/task_recurrence.module");
const group_module_1 = require("./group/group.module");
const task_user_comment_module_1 = require("./task_user_comment/task_user_comment.module");
const task_user_module_1 = require("./task_user/task_user.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: parseInt(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                autoLoadEntities: true,
                synchronize: true,
            }),
            tag_module_1.TagModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            task_module_1.TaskModule,
            task_recurrence_module_1.TaskRecurrenceModule,
            group_module_1.GroupModule,
            task_user_comment_module_1.TaskUserCommentModule,
            task_user_module_1.TaskUserModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map