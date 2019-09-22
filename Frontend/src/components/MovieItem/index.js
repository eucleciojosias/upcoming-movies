import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Item, Title } from './styles'
import Genre from '../Genre'
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
            <br /> {movie.overview.substring(0, 100)}
            {movie.overview.length > 100 && <span>...</span>}
          </li>
          <li>
            <strong>Genre</strong><br />
            {movieGenres.map(genre => (
              <Genre key={genre.id} genre={genre} />
            ))}
            <br />
          </li>
          <li>
            <Link className='SeeMore' to={`/details/${movie.id}`}>Ver detalhes</Link>
          </li>
        </ul>
      </div>
    </Item>
  )
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
  genres: PropTypes.array.isRequired
}

export default MovieItem
