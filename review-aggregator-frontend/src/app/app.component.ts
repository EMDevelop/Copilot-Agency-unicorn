import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';

interface Review {
  id: number;
  source: string;
  author: string;
  content: string;
  sentiment: string;
  createdAt: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  providers: [DatePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'review-aggregator-frontend';
  reviews: Review[] = [];
  loading = true;

  constructor(private http: HttpClient, public datePipe: DatePipe) {}

  ngOnInit() {
    this.fetchReviews();
    setInterval(() => this.fetchReviews(), 10000); // auto-refresh every 10s
  }

  fetchReviews() {
    this.loading = true;
    this.http
      .get<Review[]>('http://localhost:3000/reviews')
      .subscribe((data) => {
        this.reviews = data;
        this.loading = false;
      });
  }
}
