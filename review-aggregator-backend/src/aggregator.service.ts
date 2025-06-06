import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ReviewService } from './review.service';

@Injectable()
export class AggregatorService {
  constructor(private readonly reviewService: ReviewService) {}

  // For MVP, this just simulates fetching reviews
  @Cron('*/10 * * * * *') // every 10 seconds for demo
  async fetchReviews() {
    // Simulate fetching reviews from external sources
    await this.reviewService.addMockReview();
    // Uncomment for debugging:
    // console.log('Mock review added');
  }
}
