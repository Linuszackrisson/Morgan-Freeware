'use client';

import { useState } from 'react';
import { Software } from '@/types/software';
import { updateSoftwareRating } from '@/utils/software-service';
import { RatingStars } from '@/components/RatingStars';

interface SoftwareRatingProps {
  software: Software;
}

export function SoftwareRating({ software: initialSoftware }: SoftwareRatingProps) {
  const [software, setSoftware] = useState(initialSoftware);
  const hasRated = JSON.parse(localStorage.getItem('ratedSoftware') || '[]').includes(software.id);

  const handleRate = async (rating: number) => {
    try {
      const result = await updateSoftwareRating(software.id, rating);
      setSoftware(prev => ({ ...prev, ...result }));
      
      const rated = JSON.parse(localStorage.getItem('ratedSoftware') || '[]');
      localStorage.setItem('ratedSoftware', JSON.stringify([...rated, software.id]));
    } catch (error) {
      console.error('Error updating rating:', error);
    }
  };

  return (
    <RatingStars
      rating={software.average_rating}
      total={software.total_ratings}
      onRate={!hasRated ? handleRate : undefined}
    />
  );
} 