import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { cleanup, render } from '@testing-library/react'
import Header from '../../components/Header'

import logo from '../../assets/img/logo.png'

const customRender = () => render(<Header />)

describe('Header', () => {
  afterEach(cleanup)

  it('Should have a html header component', () => {
    const { container } = customRender()
    const header = container.getElementsByTagName('header')[0]

    expect(header).toBeInTheDocument()
  })

  it('Should have a logo img', () => {
    const { container } = customRender()
    const img = container.getElementsByTagName('img')[0]

    expect(img.src).toContain(logo)
  })
})
