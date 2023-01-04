import React from 'react'

const SectionMovie = ({movies}:any) => {
  return (
    <>
      <h1 style={{textAlign: "center"}}>Films</h1>

        {movies.map((movie:any) => (
          <div key={movie.id}>{movie.title}</div>
        ))}

    </>
  )
}

export default SectionMovie
