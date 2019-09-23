import React from 'react'
import { Container, Search } from './styles'
import MovieItem from '../../components/MovieItem'
import Loader from '../../components/Loader'
import ApiRequest from '../../service/ApiRequest'

class Movies extends React.Component {
  state = {
    page: 1,
    loading: true,
    movies: [],
    moviesList: [],
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
      moviesList: movies,
      loading: false,
      page: (this.state.page + 1)
    })
  }

  searchInMoviesList = (event) => {
    const keyWord = event.target.value.toLowerCase()
    console.log(keyWord)
    const movies = this.state.moviesList.filter((movie) => {
      return movie.title.toLowerCase().includes(keyWord)
    })

    this.setState({ movies })
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
        <Search placeholder='Search for a movie here' onKeyUp={this.searchInMoviesList} />
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
