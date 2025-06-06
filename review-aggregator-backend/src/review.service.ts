import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './review.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {}

  async create(review: Partial<Review>) {
    const newReview = this.reviewRepository.create(review);
    return this.reviewRepository.save(newReview);
  }

  async findAll(): Promise<Review[]> {
    return this.reviewRepository.find({ order: { createdAt: 'DESC' } });
  }

  async addMockReview(): Promise<Review> {
    // Simulate fetching a review from an external source
    const sources = ['Google', 'Yelp', 'Trustpilot'];
    const sentiments = ['positive', 'neutral', 'negative'];
    const review = this.reviewRepository.create({
      source: sources[Math.floor(Math.random() * sources.length)],
      author: 'John Doe',
      content:
        'This is a sample review! ' +
        Math.random().toString(36).substring(2, 8),
      sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
    });
    return this.reviewRepository.save(review);
  }
}
