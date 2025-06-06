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
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const review_entity_1 = require("./review.entity");
const review_service_1 = require("./review.service");
const review_controller_1 = require("./review.controller");
const user_entity_1 = require("./user.entity");
const user_service_1 = require("./user.service");
const auth_controller_1 = require("./auth.controller");
const schedule_1 = require("@nestjs/schedule");
const aggregator_service_1 = require("./aggregator.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'db.sqlite',
                autoLoadEntities: true,
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([review_entity_1.Review, user_entity_1.User]),
            schedule_1.ScheduleModule.forRoot(),
        ],
        controllers: [app_controller_1.AppController, review_controller_1.ReviewController, auth_controller_1.AuthController],
        providers: [app_service_1.AppService, review_service_1.ReviewService, user_service_1.UserService, aggregator_service_1.AggregatorService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map