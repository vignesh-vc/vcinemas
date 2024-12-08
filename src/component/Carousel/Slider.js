import React, { useContext, useEffect } from "react";
import { movies } from "../../constants";
import MoviesListRecommended from "../Body/MoviesListRecommended";
import { PostContext } from "../../contexts/Context";
import { GET_MOVIES } from "../../contexts/Action.types";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

export default function Slider() {
  const { state, dispatch } = useContext(PostContext);
  const nav = useNavigate();
  const handleClick = (e) => {
    dispatch({ type: GET_MOVIES, payload: e.target.id });
    nav("/movieDetails");
  };

  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active hero-slide-item">
            <img src={movies[0].others.posters.backdrops[4]?.link} />
            <div className="carousel-caption  d-md-block">
              <div className="carousel-text">
                <p className="item-content-title">{movies[0].title}</p>
                <div className="movie-infos top-down delay-2">
                  <div className="movie-info">
                    <i className="fa-solid fa-star"></i>
                    <span>{movies[0].others?.imDbRating}</span>
                  </div>
                  <div className="movie-info">
                    <i className="fa-solid fa-clock"></i>
                    <span>{movies[0].others?.runtimeStr}</span>
                  </div>
                  <div className="movie-info">
                    <span>4K</span>
                  </div>
                  <div className="movie-info">
                    <span>Dolby-Atmos</span>
                  </div>
                </div>
                <div className="item-content-description top-down delay-4">
                  {movies[0]?.plot}
                </div>
                <div className="item-action top-down">
                  <a
                    className="btn btn-hover btn-danger"
                    id={movies[0]?.id}
                    onClick={handleClick}
                  >
                    Book Ticket
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item hero-slide-item">
            <img src={movies[6].others.posters.backdrops[0]?.link} />
            <div className="carousel-caption  d-md-block">
              <div className="carousel-text">
                <p className="item-content-title">{movies[6].title}</p>
                <div className="movie-infos top-down delay-2">
                  <div className="movie-info">
                    <i className="fa-solid fa-star"></i>
                    <span>{movies[6].others?.imDbRating}</span>
                  </div>
                  <div className="movie-info">
                    <i className="fa-solid fa-clock"></i>
                    <span>{movies[6].others?.runtimeStr}</span>
                  </div>
                  <div className="movie-info">
                    <span>4K</span>
                  </div>
                  <div className="movie-info">
                    <span>Dolby-Atoms</span>
                  </div>
                </div>
                <div className="item-content-description top-down delay-4">
                  {movies[6]?.plot}
                </div>
                <div className="item-action top-down">
                  <a
                    className="btn btn-hover btn-danger"
                    id={movies[6]?.id}
                    onClick={handleClick}
                  >
                    Book Ticket
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item hero-slide-item">
            <img src={movies[2].others.posters.backdrops[4]?.link} />
            <div className="carousel-caption  d-md-block">
              <div className="carousel-text">
                <p className="item-content-title">{movies[2].title}</p>
                <div className="movie-infos top-down delay-2">
                  <div className="movie-info">
                    <i className="fa-solid fa-star"></i>
                    <span>{movies[2].others?.imDbRating}</span>
                  </div>
                  <div className="movie-info">
                    <i className="fa-solid fa-clock"></i>
                    <span>{movies[2].others?.runtimeStr}</span>
                  </div>
                  <div className="movie-info">
                    <span>4K</span>
                  </div>
                  <div className="movie-info">
                    <span>Dolby-Atoms</span>
                  </div>
                </div>
                <div className="item-content-description top-down delay-4">
                  {movies[2]?.plot}
                </div>
                <div className="item-action top-down">
                  <a
                    className="btn btn-hover btn-danger"
                    id={movies[2]?.id}
                    onClick={handleClick}
                  >
                    Book Ticket
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item hero-slide-item">
            <img src={movies[13].others.posters.backdrops[4]?.link} />
            <div className="carousel-caption  d-md-block">
              <div className="carousel-text">
                <p className="item-content-title">{movies[13].title}</p>
                <div className="movie-infos top-down delay-13">
                  <div className="movie-info">
                    <i className="fa-solid fa-star"></i>
                    <span>{movies[13].others?.imDbRating}</span>
                  </div>
                  <div className="movie-info">
                    <i className="fa-solid fa-clock"></i>
                    <span>{movies[13].others?.runtimeStr}</span>
                  </div>
                  <div className="movie-info">
                    <span>4K</span>
                  </div>
                  <div className="movie-info">
                    <span>Dolby-Atoms</span>
                  </div>
                </div>
                <div className="item-content-description top-down delay-4">
                  {movies[13]?.plot}
                </div>
                <div className="item-action top-down">
                  <a
                    className="btn btn-hover btn-danger"
                    id={movies[13]?.id}
                    onClick={handleClick}
                  >
                    Book Ticket
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item hero-slide-item">
            <img src={movies[22].others.posters.backdrops[4]?.link} />
            <div className="carousel-caption  d-md-block">
              <div className="carousel-text">
                <p className="item-content-title">{movies[22].title}</p>
                <div className="movie-infos top-down delay-22">
                  <div className="movie-info">
                    <i className="fa-solid fa-star"></i>
                    <span>{movies[22].others?.imDbRating}</span>
                  </div>
                  <div className="movie-info">
                    <i className="fa-solid fa-clock"></i>
                    <span>{movies[22].others?.runtimeStr}</span>
                  </div>
                  <div className="movie-info">
                    <span>4K</span>
                  </div>
                  <div className="movie-info">
                    <span>Dolby-Atoms</span>
                  </div>
                </div>
                <div className="item-content-description top-down delay-4">
                  {movies[22]?.plot}
                </div>
                <div className="item-action top-down">
                  <a
                    href="#"
                    className="btn btn-hover btn-danger"
                    id={movies[22]?.id}
                    onClick={handleClick}
                  >
                    Book Ticket
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <MoviesListRecommended />
      <Footer />
    </div>
  );
}
