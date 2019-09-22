import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { cleanup, render, fireEvent } from '@testing-library/react'
import MovieItem from '../../components/MovieItem'

const mockProps = {
  movie: {
      poster_path: '/zBhv8rsLOfpFW2M5b6wW78Uoojs.jpg',
      id: 540901,
      original_language: 'en',
      genre_ids: [35, 80, 18],
      title: 'Lorem',
      overview: 'Lorem ipsum dolor',
      release_date: '2019-09-13'
    }
}

const customRender = () => render(<MovieItem {...mockProps} />)

describe('Todo', () => {
  afterEach(cleanup)

  it('Should be a list item', () => {
    const { container } = customRender()
    const li = container.getElementsByTagName('li')[0]

    expect(li).toBeInTheDocument()
  })

  it('Should be a img', () => {
    const { container } = customRender()
    const img = container.getElementsByTagName('img')[0]

    expect(img).toBeInTheDocument()
  })
})
