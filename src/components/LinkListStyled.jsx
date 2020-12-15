//import React from 'react'
import styled from 'styled-components'
import colors from '../Colors'

const LinkListStyled = styled.ul`
  list-style: none;
  width: 50vw;
  height: 80vh;
  overflow: scroll;
  overflow-x: hidden;

    a{
      text-decoration: none;

      li{
        color: ${colors.earieBlack};
        height: 4rem;
        border-bottom: 0.2rem solid ${colors.greenBlueCrayola};
        background: ${colors.floralWhite};
        font-size: 1.2rem;
        padding: 1.4rem;
        display: flex;
        align-items: center;
        transition: all 0.1s;
        &:hover{
          background: ${colors.paleCerulean};
        }
      }
    }
`
export {LinkListStyled}