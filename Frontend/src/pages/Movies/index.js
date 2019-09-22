import React from 'react'
import { Container } from './styles'
import MovieItem from '../../components/MovieItem'
import Loader from '../../components/Loader'
import ApiRequest from '../../service/ApiRequest'

class Movies extends React.Component {
  state = {
    page: 1,
    loading: true,
    movies: [],
    genres: []
  }

  getGenres = async (id) => {
    const { data } = await ApiRequest.get('get-genres')
    this.setState({ genres: data.genres })
  }

  updateMoviesList = async () => {
    const { data } = await ApiRequest.get(['upcoming-movies', this.state.page].join('/'))
    const movies = [...this.state.movies, ...data.results]
    this.setState({
      movies,
      loading: false,
      page: (this.state.page + 1)
    })
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById('root');
    if (this.isBottom(wrappedElement)) {
      this.setState({ loading: true })
      this.updateMoviesList()
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
    this.setState({ mounted: true })
    this.getGenres()
    this.updateMoviesList()
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
