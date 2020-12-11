import styled from 'styled-components';
import colors from '../Colors';

const StyledUL = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;

  li{
    a{
      text-decoration: none;
      background: ${colors.carrotOrange};

      &:hover{
        color: white; 
      }
    }
  }
`

export { StyledUL }