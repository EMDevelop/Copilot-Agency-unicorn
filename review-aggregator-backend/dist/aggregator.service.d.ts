import { ReviewService } from './review.service';
export declare class AggregatorService {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    fetchReviews(): Promise<void>;
}
