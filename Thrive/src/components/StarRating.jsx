import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaStar } from 'react-icons/fa'
import '../StarRating.css'

const StarRating = ({ onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleStarClick = (ratingValue) => {
    setRating(ratingValue)
    onRatingSubmit(ratingValue)
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleStarClick(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              size={40}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  )
}

StarRating.propTypes = {
  onRatingSubmit: PropTypes.func.isRequired,
}

export default StarRating;
