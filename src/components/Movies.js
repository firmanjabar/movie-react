import React from 'react'
import Movie from './Movie'

export default function Movies({ movies }) {
  return (
    <div className="container">
      <div className="p-4">
        <div className="row d-flex justify-content-around">
          <Movie movies={movies} />
        </div>
      </div>
    </div>
  )
}
