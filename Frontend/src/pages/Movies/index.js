import React, { useState, useEffect, useCallback } from 'react'
import { Container } from './styles'
import MovieItem from '../../components/MovieItem'
import { getUpcoming } from '../../service/TMDb'

function Movies () {
  const [movies, setMovies] = useState([])
  const [setError] = useState('')

  const setErrorMsg = useCallback(() => setError("Couldn't fetch server"), [
    setError
  ])

  useEffect(() => {
    const getMoviesList = async () => {
      const movies = await getUpcoming(setErrorMsg)
      setMovies(movies.results)
    }

    getMoviesList()
  }, [setErrorMsg])

  return (
    <Container>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </Container>
  )
}

export default Movies
