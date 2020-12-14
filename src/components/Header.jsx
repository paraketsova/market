import React from 'react'
import HeaderStyled from './HeaderStyled'
import Navigation from './Navigation'

export default function Header() {
    return (
        <HeaderStyled>
            <h1>$tockmarket</h1>
            <Navigation></Navigation>
        </HeaderStyled>
    )
}
