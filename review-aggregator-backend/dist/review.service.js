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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const review_entity_1 = require("./review.entity");
let ReviewService = class ReviewService {
    reviewRepository;
    constructor(reviewRepository) {
        this.reviewRepository = reviewRepository;
    }
    async create(review) {
        const newReview = this.reviewRepository.create(review);
        return this.reviewRepository.save(newReview);
    }
    async findAll() {
        return this.reviewRepository.find({ order: { createdAt: 'DESC' } });
    }
    async addMockReview() {
        const sources = ['Google', 'Yelp', 'Trustpilot'];
        const sentiments = ['positive', 'neutral', 'negative'];
        const review = this.reviewRepository.create({
            source: sources[Math.floor(Math.random() * sources.length)],
            author: 'John Doe',
            content: 'This is a sample review! ' +
                Math.random().toString(36).substring(2, 8),
            sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
        });
        return this.reviewRepository.save(review);
    }
};
exports.ReviewService = ReviewService;
exports.ReviewService = ReviewService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(review_entity_1.Review)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReviewService);
//# sourceMappingURL=review.service.js.map