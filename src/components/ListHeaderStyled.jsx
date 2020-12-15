import styled from 'styled-components';
import colors from '../Colors';

const ListHeaderStyled = styled.div`
  background: ${colors.earieBlack};
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 1.4rem;
  color: ${colors.floralWhite};
  font-size: 1.2rem;
  position: sticky;
  top: 0;
`

export default ListHeaderStyled;