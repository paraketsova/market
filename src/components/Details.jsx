import React from 'react'
import ListHeaderStyled from './ListHeaderStyled'
import ChangeSpan from './ChangeSpan'
import ContainerStyled from './ContainerStyled'
import DetailsItemStyled from './DetailsItemStyled'
import PriceSpanStyled from './PriceSpanStyled'

export default function Details({itemData}) {    
    console.log(itemData);
    return (
        <ContainerStyled>  
            <div> 
                <ListHeaderStyled>
                    <h3>{itemData.name}</h3>            
                </ListHeaderStyled>
                    
                <DetailsItemStyled><span>Market:</span> <PriceSpanStyled>{itemData.market}</PriceSpanStyled></DetailsItemStyled>
                <DetailsItemStyled><span>Source:</span> <PriceSpanStyled>{itemData.source}</PriceSpanStyled></DetailsItemStyled>
                <DetailsItemStyled><span>Price:</span> <PriceSpanStyled>{itemData.price}</PriceSpanStyled></DetailsItemStyled>
                <DetailsItemStyled><span>Today:</span> <ChangeSpan number={itemData.today}/></DetailsItemStyled>   
                {!isNaN(itemData.w1) && <DetailsItemStyled><span>One week:</span> <ChangeSpan number={itemData.w1}/></DetailsItemStyled>}
                {!isNaN(itemData.y3) && <DetailsItemStyled><span>3 years:</span> <ChangeSpan number={itemData.y3}/></DetailsItemStyled>}
                {!isNaN(itemData.y5) && <DetailsItemStyled><span>5 years:</span> <ChangeSpan number={itemData.y5}/></DetailsItemStyled>}
                {!isNaN(itemData.mtd) && <DetailsItemStyled><span>Month to date:</span> <ChangeSpan number={itemData.mtd}/></DetailsItemStyled>}
                {!isNaN(itemData.ytd) && <DetailsItemStyled><span>Year to date:</span> <ChangeSpan number={itemData.ytd}/></DetailsItemStyled>}
            </div>        
        </ContainerStyled>
    )
}
