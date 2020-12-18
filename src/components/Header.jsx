import React from 'react'
import HeaderStyled from './HeaderStyled'
import Logo from './Logo'
import Navigation from './Navigation'
import SearchResult from './SearchResult'

export default function Header() {
    return (
        <HeaderStyled>
            <Logo>$tock<span>market</span></Logo>
            <SearchResult/>
            <Navigation/>
        </HeaderStyled>
    )
}
