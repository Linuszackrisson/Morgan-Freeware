export interface RatingStarsProps {
    softwareId: string;
    rating?: number;
    onRatingSubmitted?: (newRating: number) => void; // 
  }