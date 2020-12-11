//import React from 'react'
import styled from 'styled-components'
import colors from '../Colors'

const LinkListStyled = styled.ul`
  list-style: none;
  width: 25%;


    a{
      text-decoration: none;

      li{
        color: ${colors.earieBlack};

        &:hover{
          color: ${colors.carrotOrange};
        }
      }
    }
`
export {LinkListStyled}