import React from 'react'

const SectionMovies = ({movies}:any) => {
  return (
    <div>
      {movies.map((movie:any) => (
        <p>{movie.title}</p>
      ))}
    </div>
  )
}

export default SectionMovies
