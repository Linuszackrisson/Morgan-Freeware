import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface RatingStarsProps {
  softwareId: string;
  rating?: number;
  onRatingSubmitted?: (newRating: number) => void;
}

export function RatingStars({ softwareId, rating = 0, onRatingSubmitted }: RatingStarsProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRating = async (value: number) => {
    try {
      setIsSubmitting(true);
      const response = await fetch('/api/software/rate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          softwareId,
          rating: value,
        }),
      });

      if (!response.ok) {
        throw new Error('Kunde inte spara betyget');
      }

      if (onRatingSubmitted) {
        onRatingSubmitted(value);
      }
    } catch (error) {
      console.error('Fel vid betygsättning:', error);
      alert('Kunde inte spara betyget. Försök igen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          disabled={isSubmitting}
          onClick={() => handleRating(star)}
          className="text-2xl focus:outline-none disabled:opacity-50"
        >
          <FaStar
            className={`transition-colors ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          />
        </button>
      ))}
    </div>
  );
} 