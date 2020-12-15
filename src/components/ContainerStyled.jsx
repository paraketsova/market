import styled from 'styled-components';

const ContainerStyled = styled.div `
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: rgba( 254, 253, 244, 0.5); */
  & > div {
    height: 80vh;
    width: 50vw;
  }
  `

export default ContainerStyled;