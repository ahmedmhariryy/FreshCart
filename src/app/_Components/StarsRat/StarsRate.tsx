import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';

export function renderStars(rating: number) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaRegStarHalfStroke key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    return stars;
  }
export function calculateRatingPercentages(reviews: { rating: number }[]) {
    const total = reviews.length;
    const counts = [0, 0, 0, 0, 0]; // index 0 = 1 star, 4 = 5 star
    reviews.forEach((review) => {
      if (review.rating >= 1 && review.rating <= 5) {
        counts[review.rating - 1]++;
      }
    });
    const percentages = counts.map((count) => (total ? (count / total) * 100 : 0));
    return percentages; // [1*, 2*, 3*, 4*, 5*]
  }