import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { SoftwareRating } from '@/components/SoftwareRating';

interface RatingStarsProps {
  rating: number | null;
  total: number;
  onRate?: (rating: number) => void;
}

export function RatingStars({ rating = 0, total, onRate }: RatingStarsProps) {
  const [hover, setHover] = useState(0);
  const isInteractive = !!onRate;
  const currentRating = rating || 0;

  return (
    <div className="flex items-center justify-center">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onMouseEnter={() => isInteractive && setHover(star)}
            onMouseLeave={() => isInteractive && setHover(0)}
            onClick={() => isInteractive && onRate(star)}
            className={`text-2xl ${
              star <= (hover || currentRating)
                ? 'text-yellow-400'
                : 'text-gray-300'
            } ${isInteractive && 'hover:text-yellow-400'} transition-colors`}
            disabled={!isInteractive}
          >
            <FaStar />
          </button>
        ))}
      </div>
      <span className="font-boldtext-black/60 text-1xl ml-2 mt-1">( {total} )</span>
    </div>
  );
} 