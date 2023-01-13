import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/Movie.scss"

const Movie = (props) => {
   const navigate = useNavigate();
  return (
    <div
      className="movie-div"
      
    >
      <img src={`https://image.tmdb.org/t/p/w500/${props?.img}`} alt="" />
      <div className="title-wrapper">
        <p className="title">{props?.title}</p>
        <p className="rating">Rating : {props?.ratings}</p>
      </div>
    </div>
  );
}

export default Movie