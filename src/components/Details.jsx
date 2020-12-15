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
                    
                <DetailsItemStyled><span>Price:</span> <PriceSpanStyled>{itemData.price}</PriceSpanStyled></DetailsItemStyled>
                <DetailsItemStyled><span>Today:</span> <ChangeSpan number={itemData.today}/></DetailsItemStyled>   
                <DetailsItemStyled><span>One week:</span> <ChangeSpan number={itemData.w1}/></DetailsItemStyled>   
                <DetailsItemStyled><span>3 years:</span> <ChangeSpan number={itemData.y3}/></DetailsItemStyled>   
                <DetailsItemStyled><span>5 years:</span> <ChangeSpan number={itemData.y5}/></DetailsItemStyled>   
                <DetailsItemStyled><span>Month to date:</span> <ChangeSpan number={itemData.mtd}/></DetailsItemStyled>  
                <DetailsItemStyled><span>Year to date:</span> <ChangeSpan number={itemData.ytd}/></DetailsItemStyled>        
            </div>        
        </ContainerStyled>
    )
}
