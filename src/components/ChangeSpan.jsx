import React from 'react'
import { SpanStyled } from './SpanStyled'

export default function ChangeSpan({number}) {
    return (
        <>
        {number < 0 ?
        <SpanStyled negative>{number}</SpanStyled>
        : 
        number === 0 ?
        <SpanStyled>{number}</SpanStyled>
        :
        <SpanStyled positive>{number}</SpanStyled>
        }
        </>
    )
}
