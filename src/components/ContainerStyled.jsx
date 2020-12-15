import styled from 'styled-components';
import colors from '../Colors.js';

const ContainerStyled = styled.div `
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba( 254, 253, 244, 0.5);
  & > div {
    height: 80vh;
    width: 95vw;
  }
  `

export default ContainerStyled;