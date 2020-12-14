import styled from 'styled-components';
import colors from '../Colors';

const ULStyled = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  

  li{
    margin-left: 1.2rem;
    a{
      text-decoration: none;
      color: ${colors.floralWhite};

      &:hover{
        color: ${colors.carrotOrange};
      }
    }
  }
`

export { ULStyled }