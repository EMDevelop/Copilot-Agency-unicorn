import { ReviewService } from './review.service';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    getAll(): Promise<import("./review.entity").Review[]>;
    create(body: any): Promise<import("./review.entity").Review>;
}
