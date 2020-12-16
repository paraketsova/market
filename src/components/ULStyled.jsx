import styled from 'styled-components';
import colors from '../Colors';

// Styling for nav bar
const ULStyled = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  

  li{
    margin-left: 1.2rem;
    a{
      text-decoration: none;
      color: ${colors.floralWhite};
      transition: .3s;

      &:hover{
        color: ${colors.carrotOrange};
        font-size: 1.1rem;
      }
    }
  }
`

export { ULStyled }