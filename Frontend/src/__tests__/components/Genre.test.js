import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { cleanup, render, fireEvent } from '@testing-library/react'
import Genre from '../../components/Genre'

const mockProps = {
  genre: {
      id: 55,
      name: 'Action'
    }
}

const customRender = () => render(<Genre {...mockProps} />)

describe('Genre', () => {
  afterEach(cleanup)

  it('Should have content', () => {
    const { container } = customRender()
    const span = container.getElementsByTagName('span')[0]

    expect(span).toHaveTextContent('Action')
  })
})
