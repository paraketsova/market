import React from 'react'
import HeaderStyled from './HeaderStyled'
import Logo from './Logo'
import Navigation from './Navigation'
import SearchForm from './SearchForm'

export default function Header() {
    return (
        <HeaderStyled>
            <Logo>$tock<span>market</span></Logo>
            <SearchForm/>
            <Navigation/>
        </HeaderStyled>
    )
}
