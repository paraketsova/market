import colors from '../Colors'
import styled from 'styled-components'

// Red color for negative numbers and green for positive numbers. 
const SpanStyled = styled.span`
    font-weight: 600;
    color: ${props => props.negative ? colors.flame : props.positive ? colors.mediumSeaGreen : colors.earieBlack}
`

export {SpanStyled}