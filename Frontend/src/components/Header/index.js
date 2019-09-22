import React from 'react'
import logo from '../../assets/img/logo.png'
import { TopHeader, Logo } from './styles'

function Header () {
  return (
    <TopHeader>
      <Logo src={logo} alt='Umwapp logo' />
    </TopHeader>
  )
}

export default Header
