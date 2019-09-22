import React from 'react'
import { Container } from './styles'
import MovieItem from '../../components/MovieItem'
import Loader from '../../components/Loader'
import ApiRequest from '../../service/ApiRequest'

class Movies extends React.Component {
  state = {
    loading: true,
    movies: [],
    genres: []
  }

  getGenres = async (id) => {
    const { data } = await ApiRequest.get('get-genres')
    this.setState({ genres: data.genres, loading: false })
  }

  updateMoviesList = async (page) => {
    const { data } = await ApiRequest.get(['upcoming-movies', page].join('/'))
    const movies = [...this.state.movies, ...data.results]
    this.setState({ movies })
  }

  componentDidMount() {
    this.setState({ mounted: true })
    this.updateMoviesList(1)
    this.getGenres()
  }

  render() {
    const { movies, genres, loading } = this.state
    return (
      <>
        { loading ? <Loader /> : null }
        <Container>
          {movies.length > 0 && movies.map(movie => (
            <MovieItem key={movie.id} movie={movie} genres={genres} />
          ))}
        </Container>
      </>
    )
  }
}

export default Movies
