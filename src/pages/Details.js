import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../style/Details.scss";
import CarouselCast from "./CarouselCast";

const Details = () => {
  const [movieDetail, setMovieDetail] = useState([]);
  const location = useLocation();

  console.log("loc", location?.state?.id);

  const fetchMovie = async () => {
    const fetchMovieDetail = await fetch(
      `https://api.themoviedb.org/3/movie/${location?.state?.id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1`
    );
    const movie = await fetchMovieDetail.json();
    console.log(movie, "222222");
    setMovieDetail(movie);
  };

  useEffect(() => {
    if (location?.state?.id) {
      fetchMovie();
    }
  }, [location?.state?.id]);

  console.log(movieDetail?.poster_path, "ww");
  const styleObj = {
    "background-image": `linear-gradient(to bottom right, #002f4b6c, #000000a2),url('https://image.tmdb.org/t/p/original${movieDetail?.backdrop_path}')`,
    "background-position": "center",
    "background-size": `cover`,
    "background-repeat": "no-repeat",
  };
  return (
    <div className="details-wrapper">
      <div className="container-image" style={styleObj}>
        <div className="details-content-wrapper">
          <div className="upper-content-wrapper">
            {" "}
            <img
              className="details-content-img"
              src={`https://image.tmdb.org/t/p/w500${movieDetail?.poster_path}`}
              alt=""
            />
            <div className="intro-txt-wrapper">
              {" "}
              <h4 className="txt-header">{movieDetail?.original_title}</h4>
              <span className="txt-rating">
                Rating : {movieDetail?.vote_average}
              </span>
              <div className="duration">
                <span className="txt-duration">
                  {movieDetail?.runtime + " " + "min"}
                </span>
                <span className="txt-duration-para">{movieDetail?.title}</span>
              </div>
              <span className="release date">
                Release Date : {movieDetail?.release_date}
              </span>
            </div>
          </div>
          <div className="lower-content-wrapper">
            <h4 className="main-header">Overview</h4>
            {movieDetail?.overview || ""}
          </div>{" "}
        </div>
      </div>
      <div className="cast-wrapper">
        <CarouselCast id={location?.state?.id} />
      </div>
    </div>
  );
};

export default Details;
