import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReviewService } from './review.service';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  async getAll() {
    return this.reviewService.findAll();
  }

  @Post()
  async create(@Body() body: any) {
    return this.reviewService.create(body);
  }
}
