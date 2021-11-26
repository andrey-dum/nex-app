import React from "react";
import { FaStar } from "react-icons/fa";

export const StarRating = (props) => {
  return (
    <div>
      {Array(5)
        .fill(0)
        .map((_, idx) => (
          <label key={idx}>
            <FaStar color={idx < props.stars ? "#FFD450" : "#b6bccc"} />
          </label>
        ))}
    </div>
  );
};
