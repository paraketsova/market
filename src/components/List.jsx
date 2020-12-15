import React from 'react'
import { LinkListStyled } from './LinkListStyled'
import ListContainerStyled from './ListContainerStyled';
import ListHeaderStyled from './ListHeaderStyled'
import ListItem from './ListItem';

export default function List(props) {
  const {list, title, args, markets} = props;
  return (
    <ListContainerStyled>


    <LinkListStyled>
      <ListHeaderStyled><h3>{title}</h3></ListHeaderStyled>
      {list.map((listItem) => (
        <ListItem key={listItem[0]} listItemData={listItem} type={args}>
          {markets ? listItem[0] : listItem[1].name}
        </ListItem>
      ))}
    </LinkListStyled>

    </ListContainerStyled>
  )
}
