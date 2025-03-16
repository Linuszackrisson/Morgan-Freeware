'use client';

import { useState } from 'react';
import { RatingStars } from './RatingStars';

interface SoftwareRatingProps {
  softwareId: string;
  initialRating: number;
  totalRatings: number;
}

export function SoftwareRating({ softwareId, initialRating, totalRatings }: SoftwareRatingProps) {
  const [currentRating, setCurrentRating] = useState(initialRating);

  const handleRatingSubmitted = (newRating: number) => {
    setCurrentRating(newRating);
  };

  return (
    <div className="flex items-center gap-2">
      <RatingStars
        softwareId={softwareId}
        initialRating={currentRating}
        totalRatings={totalRatings}
        onRatingSubmitted={handleRatingSubmitted}
      />
    </div>
  );
} 