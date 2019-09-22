import React from 'react'

import { Container, Title, Section } from './styles'
import Loader from '../../components/Loader'
import Genre from '../../components/Genre'
import ApiRequest from '../../service/ApiRequest'
import { TMDB_BACKDROP_URL } from '../../globals/constants'

class Details extends React.Component {
  state = {
    loading: true,
    movie: {},
    genres: []
  }

  getDetails = async (movieId) => {
    await ApiRequest.get(['get-movie-details', movieId].join('/')).then((res) => {
      this.setState({ movie: res.data, loading: false })
    })
  }

  formatMoney (value) {
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }

  componentDidMount() {
    this.setState({ mounted: true })
    const { movie } = this.props.match.params
    this.getDetails(movie)
  }

  render() {
    const { movie, loading } = this.state
    return (
      <>
        { loading ? <Loader /> : null }
        {!loading &&
          <Container style={{ backgroundImage: `url(${TMDB_BACKDROP_URL}${movie.backdrop_path})` }}>
            <Title>{movie.title}</Title>
            <Section>
              <h2>{movie.tagline}</h2>
              <section>
              </section>
              <section>
                <div>
                  <strong>Release date</strong><br />
                  {movie.release_date}
                </div>
                <div>
                  <strong>Genre</strong><br />
                  {movie.genres.map(genre => (
                    <Genre key={genre.id} genre={genre} />
                  ))}
                </div>
                <div>
                  <strong>Votes average</strong><br />
                  {movie.vote_average}
                </div>
                <div>
                  <strong>Budget</strong><br />
                  U$$ {this.formatMoney(movie.budget)}
                </div>
                <div>
                  <strong>Status</strong><br />
                  {movie.status}
                </div>
              </section>
              <section>
                <p className='Overview'><strong>Overview</strong><br />{movie.overview}</p>
              </section>
            </Section>
          </Container>
        }
      </>
    )
  }
}

export default Details
