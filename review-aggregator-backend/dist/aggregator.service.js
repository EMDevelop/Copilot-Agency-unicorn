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
exports.AggregatorService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const review_service_1 = require("./review.service");
let AggregatorService = class AggregatorService {
    reviewService;
    constructor(reviewService) {
        this.reviewService = reviewService;
    }
    async fetchReviews() {
        await this.reviewService.addMockReview();
    }
};
exports.AggregatorService = AggregatorService;
__decorate([
    (0, schedule_1.Cron)('*/10 * * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AggregatorService.prototype, "fetchReviews", null);
exports.AggregatorService = AggregatorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [review_service_1.ReviewService])
], AggregatorService);
//# sourceMappingURL=aggregator.service.js.map