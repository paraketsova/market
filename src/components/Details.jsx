import React from "react";
import ListHeaderStyled from "./ListHeaderStyled";
import ContainerStyled from "./ContainerStyled";
import DetailsItemStyled from "./DetailsItemStyled";
import PriceSpanStyled from "./PriceSpanStyled";
import { Link } from "react-router-dom";
import ButtonBackStyled from "./ButtonBackStyled";
import { SpanStyled } from "./SpanStyled";

// Prints all details for each item on detail page.
export default function Details({ itemData, type }) {
  return (
    <ContainerStyled>
      <div>
        <ListHeaderStyled>
          <h3>{itemData.name}</h3>
          <Link to={`/${type}`}>
            <ButtonBackStyled>Back</ButtonBackStyled>
          </Link>
        </ListHeaderStyled>

        <DetailsItemStyled>
          <span>Market:</span>{" "}
          <PriceSpanStyled>{itemData.market.toUpperCase()}</PriceSpanStyled>
        </DetailsItemStyled>

        <DetailsItemStyled>
          <span>Source:</span>{" "}
          <PriceSpanStyled>{itemData.source}</PriceSpanStyled>
        </DetailsItemStyled>

        <DetailsItemStyled>
          <span>Price:</span>{" "}
          <PriceSpanStyled>{itemData.price}</PriceSpanStyled>
        </DetailsItemStyled>

        <DetailsItemStyled>
          <span>Today:</span> <SpanStyled number={itemData.today}>{itemData.today}</SpanStyled>
        </DetailsItemStyled>
        
        {/* Uses !isNaN to correct for 0:s from the API 
            only prints detail item if we get it from the API. */}
        {!isNaN(itemData.w1) && (
          <DetailsItemStyled>
            <span>One week:</span> <SpanStyled number={itemData.w1}>{itemData.w1}</SpanStyled>
          </DetailsItemStyled>
        )}
        {!isNaN(itemData.y3) && (
          <DetailsItemStyled>
            <span>3 years:</span> <SpanStyled number={itemData.y3}>{itemData.y3}</SpanStyled>
          </DetailsItemStyled>
        )}
        {!isNaN(itemData.y5) && (
          <DetailsItemStyled>
            <span>5 years:</span> <SpanStyled number={itemData.y5}>{itemData.y5}</SpanStyled>
          </DetailsItemStyled>
        )}
        {!isNaN(itemData.mtd) && (
          <DetailsItemStyled>
            <span>Month to date:</span> <SpanStyled number={itemData.mtd}>{itemData.mtd}</SpanStyled>
          </DetailsItemStyled>
        )}
        {!isNaN(itemData.ytd) && (
          <DetailsItemStyled>
            <span>Year to date:</span> <SpanStyled number={itemData.ytd}>{itemData.ytd}</SpanStyled>
          </DetailsItemStyled>
        )}
      </div>
    </ContainerStyled>
  );
}
