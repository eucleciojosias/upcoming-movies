import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/img/logo.svg'
import { TopHeader, Logo } from './styles'

function Header () {
  return (
    <TopHeader>
      <Link to='/'>
        <Logo src={logo} alt='Umwapp logo' />
      </Link>
    </TopHeader>
  )
}

export default Header
