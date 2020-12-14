import React from 'react'

export default function IndexItem({indexData}) {
    return (
        <div>
            <h2>{indexData.name}</h2>
            <p>Market: {indexData.market}</p>
            <p>Mtd: {indexData.mtd}</p>
            <p>Price: {indexData.price}</p>
            <p>Source: {indexData.source}</p>
            <p>Today: {indexData.today}</p>
            <p>w1: {indexData.w1}</p>
            <p>y3: {indexData.y3}</p>
            <p>y5: {indexData.y5}</p>
            <p>ytd: {indexData.ytd}</p>
        </div>
    )
}
