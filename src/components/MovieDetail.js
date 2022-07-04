import React from 'react'
import { useLocation } from 'react-router-dom'
import Rating from 'react-rating'

export default function MovieDetail() {
    const movie = useLocation().state
    console.log(movie)
    return (
        <>
            <div className="card m-4" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img loading='lazy' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="img-fluid rounded-start" alt={`backdrip ${movie.title}`} />
                    </div>
                    <div className="col-md-8" style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                        backgroundSize: "200%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: 'center',
                    }}>
                        <div style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            height: "100%"
                        }}>
                            <div className="card-body text-white">
                                <h1 className="card-title">{movie.title} <span style={{
                                    fontWeight: "200"
                                }}>({movie.release_date.split("-")[0]})</span></h1>
                                <Rating
                                    className='mt-2'
                                    readonly
                                    initialRating={movie.vote_average / 2}
                                    emptySymbol={<img width="20px" src="https://i.ibb.co/MDM4Crp/icons8-star-60.png" className="icon" alt='star empty' />}
                                    fullSymbol={<img width="20px" src="https://i.ibb.co/QXxbbKv/icons8-star-60-1.png" className="icon" alt='star full' />}
                                />
                                <p className="card-text mt-3"><small className="text-muted">Realease : {movie.release_date}</small></p>
                                <p className="card-text">{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
