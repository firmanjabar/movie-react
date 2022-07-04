import React from 'react'
import { Link } from 'react-router-dom'

export default function Movie({ movies }) {
  const item = movies.map((movie) => {
    return (
      <div className="card bg-dark col-lg-2 mt-3 mx-1" key={movie.id}>
        <Link to={`/${movie.id}`} state={movie} style={{ textDecoration: "none" }}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className="card-img-top img-fluid" alt={`poster ${movie.title}`} />
          <div className="card-body text-center">
            <b>
              <p className="card-title text-white lh-1">{movie.title}</p>
            </b>
            <small className="card-title text-white">({movie.release_date.split("-")[0]})</small>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <>
      {movies.length !== 0 ? item : <h4>No Movies</h4>}
    </>
  );
}
