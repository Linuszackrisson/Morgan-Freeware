import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface RatingStarsProps {
  softwareId: string;
  initialRating?: number;
  totalRatings?: number;
  onRatingSubmitted?: (newRating: number) => void;
}

export function RatingStars({ softwareId, initialRating = 0, totalRatings = 0, onRatingSubmitted }: RatingStarsProps) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);
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
        throw new Error('Could not save rating');
      }

      const result = await response.json();
      setRating(value);
      if (onRatingSubmitted) {
        onRatingSubmitted(result.newAverage);
      }
    } catch (error) {
      alert('Dont try to rate the same software too many times, i am to lazy to implement singletime vote feature!!!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            disabled={isSubmitting}
            onClick={() => handleRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className="text-2xl focus:outline-none disabled:opacity-50"
          >
            <FaStar
              className={`transition-colors ${
                star <= (hover || rating)
                  ? 'text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
      {totalRatings > 0 && (
        <p className="text-sm text-gray-500 mt-1">
          {totalRatings} ratings
        </p>
      )}
    </div>
  );
} 