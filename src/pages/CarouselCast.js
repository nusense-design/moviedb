import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../style/Details.scss";

const CarouselCast = (props) => {
  const [castDetail, setCastDetail] = useState([]);
  const location = useLocation();

  console.log("loc", location?.state?.id);

  const fetchMovie = async () => {
    
     const fetchMovieDetail = await fetch(
      `https://api.themoviedb.org/3/movie/${props?.id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
    );
    const movie = await fetchMovieDetail.json();
    console.log(movie, "222222 cast");
    setCastDetail(movie);
  };

  useEffect(() => {
    if (props?.id) {
      fetchMovie();
    }
  }, []);


  return (
    <React.Fragment>
      <h4 className="main-header-cast">Cast</h4>
      <div className="carousel-cast-wrapper">
        {castDetail?.cast?.map((c) => (
          <div className="cast-card-wrapper">
            <img
              className="cast-div-image"
              src={
                c?.profile_path
                  ? `https://image.tmdb.org/t/p/w500${c?.profile_path}`
                  : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_1280.png`
              }
              alt=""
            />
            <p className="cast-description">{c?.character}</p>
            <p className="cast-description">{c?.original_name}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default CarouselCast;
