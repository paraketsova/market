import styled from 'styled-components';

const ContainerStyled = styled.div `
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    height: 80vh;
    width: 50vw;
  }
  `

export default ContainerStyled;