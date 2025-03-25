import { FaStar } from 'react-icons/fa';
import { rateSoftware } from '@/utils/software-service';
import { RatingStarsProps } from '@/types/ratings';

export function RatingStars({ softwareId, rating = 0, onRatingSubmitted }: RatingStarsProps) { 
  // När vi klickar på en stjärna så sparar vi betyget i databasen och skickar vidare det nya betyget till "föräldrakomponenten"

  /* 
Jag medveten om att det är endast ett betyg per program, det är ingen total, inget genomsnitt, downvotar du, så gör du det..
För att få det annorlunda så hade förmodligen behövt användare för att få dom unika, eller typ spara i localstorage om någon röstat, så det inte blir spam.
Men för enkelhetens skull så blev det så här. Det går åtminstone att rösta ;) 

  */ 
  const handleRating = async (value: number) => {  
    try {
      // Sparar betyget i databasen
      await rateSoftware(softwareId, value);
      // skickar vidare det nya betyget till "föräldrakomponenten"
      onRatingSubmitted?.(value);
    } catch (error) {
      console.error('Failed to save rating:', error);
    }
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => handleRating(star)}
          className="text-2xl focus:outline-none hover:scale-110 transition-transform"
          aria-label={`Rate ${star} out of 5 stars`}
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