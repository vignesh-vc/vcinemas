import React, { useContext, useEffect, useState } from "react";
import imdb from "../../assets/image/IMDB_Logo_2016.svg";
import Spinner from "../../utils/Spinner";
import { PostContext } from "../../contexts/Context";
import { useNavigate } from "react-router-dom";

function MovieLanding() {
  const { state } = useContext(PostContext);
  const [loading, setLoading] = useState(false);
  const [sessionMovies, setSessionMovies] = useState();
  const nav = useNavigate();
  useEffect(() => {
    if (sessionMovies) {
      setLoading(true);
    }
  }, [sessionMovies]);

  async function getmoviesfromLocal() {
    if (state.selectedMovies[0]) {
      localStorage.setItem("movies", JSON.stringify(state.selectedMovies[0]));
    }
    let n = await localStorage.getItem("movies");
    setSessionMovies(JSON.parse(n));
  }
  useEffect(() => {
    getmoviesfromLocal();
  }, []);

  const handleclick = (e) => {
    nav("/seatBooking");
  };

  return (
    <>
      {loading ? (
        <div className="movielanding-container">
          <div className="landing-img-container">
            <div className="image-gradient"></div>
            <img
              src={sessionMovies?.others.posters?.backdrops[0]?.link}
              className="background-for-landing"
            />
          </div>

          <div className="row landing-row">
            <div className="col-md-4 col-lg-4 landing-col-img">
              {" "}
              <img src={sessionMovies?.image} className="poster-header" />
            </div>
            <div className="col-md-8 col-lg-8">
              <div className="content-text">
                <p className="content-title">{sessionMovies?.title}</p>
                <div className="movie-details from-top-to-down">
                  <div className="movie-detail">
                    <i className="fa-solid fa-star"></i>
                    <span>{sessionMovies?.others?.imDbRating}</span>
                  </div>
                  <div className="movie-detail">
                    <i className="fa-solid fa-clock"></i>
                    <span>{sessionMovies?.others?.runtimeStr}</span>
                  </div>
                  <div className="movie-detail">
                    <span>4K</span>
                  </div>
                  <div className="movie-detail-genres">
                    <span>
                      {sessionMovies?.genreList.map((data, i) => {
                        return (
                          <button
                            className="btn btn-outline-danger btn-genres"
                            key={"btn-genres" + i}
                          >
                            {data.value}
                          </button>
                        );
                      })}
                    </span>
                  </div>
                </div>
                <div className="content-description from-top-to-down">
                  {sessionMovies?.plot}
                </div>
                <div className="landing-button">
                  <a
                    className="btn btn-hover btn-danger from-top-to-down"
                    id={sessionMovies?.id}
                    onClick={handleclick}
                  >
                    Book Ticket
                  </a>
                </div>
              </div>
              {sessionMovies?.others?.actorList && (
                <div
                  className="row landing-cast-row all-cast-row"
                  id="cast-row"
                >
                  <div className="col-md-12">
                    <h2 className="landing-cast-text">Cast</h2>
                    <div className="cast-actor-header" id="cast-actor-header">
                      {sessionMovies?.others?.actorList
                        ?.slice(0, 15)
                        .map((data, index) => {
                          return (
                            <div
                              className="inner-cast-header"
                              key={"cast-details" + index}
                            >
                              <img
                                className="cast-actor-img"
                                style={{ width: "150px", height: "150px" }}
                                src={data.image}
                              />
                              <p className="cast-actor-name">{data.name}</p>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="trailer-and-backdrop trailer-text-landing">
              Trailer{" "}
              {sessionMovies?.others.posters?.backdrops.length > 0 &&
                "& Backdrop"}
            </div>
            <div className="trailer-landing">
              <div className="inner-trailer-landing" id="trailer-landing">
                <div className="backdrop-landing-img">
                  {sessionMovies?.others?.trailer?.linkEmbed && (
                    <iframe
                      src={sessionMovies?.others?.trailer?.linkEmbed}
                    ></iframe>
                  )}
                  {sessionMovies?.others.posters?.backdrops.map(
                    (data, index) => {
                      return (
                        <img
                          className="landing-backdrop"
                          key={"backdrop" + index}
                          src={data.link}
                        />
                      );
                    }
                  )}
                </div>
              </div>
            </div>
            <div className="trailer-and-backdrop crew-members">
              Crew members
            </div>
            <div className="crew-text">
              <span>Director:</span>
              <p>{sessionMovies?.others?.directors}</p>
            </div>
            <div className="crew-text">
              <span>Writer:</span>
              <p>{sessionMovies?.others?.writers}</p>
            </div>
            <div className="crew-text">
              <span>Stars:</span>
              <p>{sessionMovies?.others?.stars}</p>
            </div>
            <div className="trailer-and-backdrop similar-movies-landing">
              Similar Movies
            </div>
            <div className="similar-movies" id="similar-movies">
              {sessionMovies?.others?.similars.length > 0 &&
                sessionMovies?.others?.similars
                  ?.slice(
                    0,
                    sessionMovies?.others?.similars.length < 6
                      ? sessionMovies?.others?.similars.length
                      : 6
                  )
                  .map((data, index) => {
                    return (
                      <div
                        className="cards"
                        key={"movie-cards-similar-" + index}
                      >
                        <img className="cards__img" src={data.image} />
                        <div className="cards__overlay">
                          <div className="card__title">{data.title}</div>
                          <div className="card__runtime">
                            <div className="card__rating">
                              <img className="imdb-icon" src={imdb} />
                              <i className="fas fa-star" />
                              {data ? data.imDbRating : ""}/10
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}
export default MovieLanding