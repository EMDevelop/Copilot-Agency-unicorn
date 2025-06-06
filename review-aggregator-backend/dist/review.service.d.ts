import { Repository } from 'typeorm';
import { Review } from './review.entity';
export declare class ReviewService {
    private reviewRepository;
    constructor(reviewRepository: Repository<Review>);
    create(review: Partial<Review>): Promise<Review>;
    findAll(): Promise<Review[]>;
    addMockReview(): Promise<Review>;
}
