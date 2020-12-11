import styled from 'styled-components';
import colors from '../Colors';

const StyledUL = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 30vw;

  li{
    a{
      text-decoration: none;
      color: ${colors.floralWhite};

      &:hover{
        color: ${colors.carrotOrange};
      }
    }
  }
`

export { StyledUL }