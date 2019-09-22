import React from 'react'
import PropTypes from 'prop-types'
import { Item, Title, Genre } from './styles'
import { TMDB_POSTER_URL } from '../../globals/constants'

function MovieItem ({ movie, genres }) {

  const movieGenres = genres.filter((genre) => {
    return movie.genre_ids.includes(genre.id)
  })

  return (
    <Item>
      <Title>{movie.title}</Title>
      <div>
        <img
          src={`${TMDB_POSTER_URL}${movie.poster_path}`}
          alt={movie.title}
        />
        <ul>
          <li>
            <strong>Release date</strong><br />
            {movie.release_date}
          </li>
          <li>
            <strong>Overview</strong>
            <br /> {movie.overview.substring(0, 200)}
            {movie.overview.length > 200 && <span>...</span>}
          </li>
          <li>
            <strong>Genre</strong><br />
            {movieGenres.map(genre => (
              <Genre key={genre.id}>{genre.name}</Genre>
            ))}
            <br />
          </li>
        </ul>
      </div>
    </Item>
  )
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieItem
