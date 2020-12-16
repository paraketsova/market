import styled from 'styled-components'
import colors from '../Colors'

const ButtonBackStyled = styled.div `
    border-radius: 30px;
    padding: 5px 10px;
    border: none;
    font-weight: 500;
    background-color: ${colors.floralWhite};
    margin: 0.7rem;
    transition: .3s;
    font-size: .9rem;
    color: ${colors.earieBlack};
    
    &:hover, &:focus {
        background-color: ${colors.carrotOrange};
        color: ${colors.floralWhite};
        transform: scale(1.1);
        outline: none;
    }
`
export default ButtonBackStyled;