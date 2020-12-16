import React from "react";
import ButtonBackStyled from "./ButtonBackStyled";
import { LinkListStyled } from "./LinkListStyled";
import ListContainerStyled from "./ListContainerStyled";
import ListHeaderStyled from "./ListHeaderStyled";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

// Prints all the correct data to a list for all categories.
export default function List(props) {
  const { list, title, args, markets } = props;
  return (
    // Print correct header
    <ListContainerStyled>
      <LinkListStyled>
        <ListHeaderStyled>
          {title === "Stocks" ? (
            <>
              <h3>{list[0][1].market}</h3>
              <Link to="/markets">
                <ButtonBackStyled>Back</ButtonBackStyled>
              </Link>
            </>
          ) : (
            <>
              <h3>{title}</h3>
              <Link to="/">
                <ButtonBackStyled>Back</ButtonBackStyled>
              </Link>
            </>
          )}
        {/* Print correct data*/}        
        </ListHeaderStyled>
        {list.map((listItem) => (
          <ListItem key={listItem[0]} listItemData={listItem} type={args}>
            {markets ? listItem[0] : listItem[1].name}
          </ListItem>
        ))}
      </LinkListStyled>
    </ListContainerStyled>
  );
}
