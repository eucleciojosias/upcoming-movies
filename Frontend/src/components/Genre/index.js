import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const GenreSpan = styled.span`
  background-color: #aaaaaa;
  color: #333;
  padding: 1px 3px;
  border-radius: 4px;
  margin: 2px;
  display: inline-block;
`

function Genre ({ genre }) {
  return (
    <GenreSpan>
      {genre.name}
    </GenreSpan>
  )
}

Genre.propTypes = {
  genre: PropTypes.object.isRequired
}

export default Genre
