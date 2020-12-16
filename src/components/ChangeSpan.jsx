import React from 'react'
import { SpanStyled } from './SpanStyled'

// Used to change negative stock number to red and positive to green. 
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
