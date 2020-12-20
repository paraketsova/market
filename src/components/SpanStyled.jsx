import colors from '../Colors'
import styled from 'styled-components'

// Used to change negative stock number to red and positive to green.  
const SpanStyled = styled.span`
    font-weight: 600;
    color: ${props => props.number < 0 ? colors.flame : props.number === 0 ? colors.earieBlack : colors.mediumSeaGreen}
`

export {SpanStyled}