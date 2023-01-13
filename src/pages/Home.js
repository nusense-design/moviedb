import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";


const Home = (props) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate()

  const fetchMovies = async () => {
    const fetchMovieList = await fetch(`https://api.themoviedb.org/3/movie/${
      props?.type
    }?api_key=${`c45a857c193f6302f2b5061c3b85e743`}&language=en-US&page=1
`);
    console.log("fetchMovieList", fetchMovieList);
    const movieList = await fetchMovieList.json();
    console.log("movieList", movieList);
    setMovies(movieList);
  };

  const getSearchedMovies = async () => {
    const fetchMovieList = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${`c45a857c193f6302f2b5061c3b85e743`}&language=en-US&query=${
      props?.queryInput
    }&page=1
`);
    console.log("fetchMovieList", fetchMovieList);
    const movieList = await fetchMovieList.json();
    console.log("movieList", movieList);
    setMovies(movieList);
  };

  useEffect(() => {
    fetchMovies();
  }, [props?.type]);


  useEffect(() => {
    if (props?.queryInput ){
getSearchedMovies();
    } 
  }, [props?.queryInput]);


  return (
    <React.Fragment>
      <div className="movie-wrapper">
        {movies?.results?.map((movie) => (
          <div onClick={() => navigate("/details",{state:{id:movie?.id}})}>
            <Movie
              title={movie?.original_title}
              img={movie?.poster_path}
              ratings={movie?.vote_average}
              id={movie?.id}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Home;
