const StarRating = ({ rating = 0, outOf = 5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = outOf - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex text-lg text-orange-400 relative">
      {/* Full Stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={`full-${i}`}>★</span>
      ))}

      {/* Half Star */}
      {hasHalfStar && (
        <span key="half" className="relative">
          <span className=" text-gray-300">★</span>
          <span className="absolute left-1/50 top-0 overflow-hidden text-orange-400 w-1/2 h-full">★</span>
        </span>
      )}

      {/* Empty Stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-300">★</span>
      ))}
    </div>
  );
};



export default StarRating