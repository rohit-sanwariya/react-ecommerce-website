import {   faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import {   faStar as faEmtpy } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rating = ({product}) => {
  let ratingNonProp = product.rating;

  let flooredRatingNonProp = Math.floor(product.rating);

 
 
  const starArr = [];
  for (let index = 0; index < flooredRatingNonProp; index++) {
    starArr.push(<FontAwesomeIcon icon={faStar} />);
  }
  
  return (
<>
<FontAwesomeIcon className="rating-star" 
icon={
  ratingNonProp>=1?faStar:ratingNonProp>=.5?faStarHalfAlt:faEmtpy
  }/> 
<FontAwesomeIcon className="rating-star" 
icon={
  ratingNonProp>=2?faStar:ratingNonProp>=1.5?faStarHalfAlt:faEmtpy
  }/>
<FontAwesomeIcon className="rating-star" 
icon={
  ratingNonProp>=3?faStar:ratingNonProp>=2.5?faStarHalfAlt:faEmtpy
  }/>
<FontAwesomeIcon className="rating-star" 
icon={
  ratingNonProp>=4?faStar:ratingNonProp>=3.5?faStarHalfAlt:faEmtpy
  }/>
<FontAwesomeIcon className="rating-star" 
icon={
  ratingNonProp>=5?faStar:ratingNonProp>=4.5?faStarHalfAlt:faEmtpy
  }/>{ratingNonProp}
</>
  );
};

export default Rating;
