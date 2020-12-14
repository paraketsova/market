import React from 'react'
import ChangeSpan from './ChangeSpan'

export default function Details({itemData}) {    
    return (
        <div>         
            <h3>{itemData.name}</h3>            
            <p>Price(SEK): {itemData.price}</p>
            <p>Today: <ChangeSpan number={itemData.today}/></p>   
            <p>One week: <ChangeSpan number={itemData.w1}/></p>   
            <p>3 years: <ChangeSpan number={itemData.y3}/></p>   
            <p>5 years: <ChangeSpan number={itemData.y5}/></p>   
            <p>Month to date: <ChangeSpan number={itemData.mtd}/></p>  
            <p>Year to date: <ChangeSpan number={itemData.ytd}/></p>         
        </div>
    )
}
