import colors from '../Colors'
import styled from 'styled-components'

const SpanStyled = styled.span`
    color: ${props => props.negative ? colors.flame : props.positive ? colors.mediumSeaGreen : colors.earieBlack}
`

export {SpanStyled}